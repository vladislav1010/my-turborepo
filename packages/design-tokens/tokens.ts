import { TokensBase } from "./types";
import { valuesToRem, Exact } from "./utilities";
import { breakpoints } from "./token-groups/breakpoints";
import { font } from "./token-groups/font";
import { colors } from "./token-groups/colors";

export const lightTokens = createTokens({
  colors: colors.light,
  font: valuesToRem(font.light),
});

export const darkTokens = createTokens({
  colors: colors.dark,
  font: valuesToRem(font.dark),
});

export const colorSchemeIndependentTokens = createTokens({
  breakpoints: valuesToRem(breakpoints),
});

export type ColorSchemeDependentTokens = typeof lightTokens;

export type ColorSchemeIndependentTokens = typeof colorSchemeIndependentTokens;

export type TokenGroupName =
  | keyof ColorSchemeDependentTokens
  | keyof ColorSchemeIndependentTokens;

/**
 * Функция просто возвращает переданные токены с метаданными, и обеспечивает проверку типов.
 *
 * Проверяет, что вход совпадает с `TokensBase` точно, и выводит (в смысле, TS) всё.
 */
export function createTokens<T extends Exact<TokensBase, T>>(tokens: T) {
  return tokens;
}
