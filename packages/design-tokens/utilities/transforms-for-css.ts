import { TokenGroup, TokenValueGroup } from "../types";
import { rem, createVar } from "./css";
import { Exact } from "./plain";

export function valuesToRem<T extends Exact<TokenGroup, T>>(tokenGroup: T) {
  return Object.fromEntries(
    Object.entries(tokenGroup).map(([token, metadataAndValue]) => [
      token,
      { ...metadataAndValue, value: rem(metadataAndValue.value) },
    ])
    // Мы теряем вывод типов `tokenGroup` после трансформации объекта
    // с `Object.fromEntries()` and `Object.entries()`. Поэтому, мы приводим результат назад к T,
    // т.к. мы только конвертировали `value` типа string.
  ) as T;
}

/**
 * Названия токенов keyframe, с префиксом.
 *
 * ```
 * ['p-keyframes-fade-in', 'p-keyframes-spin']
 * ```
 */
export function getKeyframeNames(motionTokenGroup: TokenValueGroup): string[] {
  return Object.keys(motionTokenGroup)
    .map((token) => (token.startsWith("keyframes") ? `p-${token}` : null))
    .filter(Boolean) as string[];
}

/**
 * CSS custom properties токенов.
 *
 * ```
 * ['--p-background', '--p-text']
 * ```
 */
export function getCustomPropertyNames(
  tokens: Record<string, TokenValueGroup>
) {
  return Object.entries(tokens)
    .map(([_, tokenGroup]: [string, TokenValueGroup]) =>
      Object.keys(tokenGroup).map((token) => createVar(token))
    )
    .flat();
}
