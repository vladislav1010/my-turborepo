import { toEm, toPx } from "./css";
import { Entry } from "./plain";
import type {
  breakpoints as valueAndMetaBreakpointsTokenGroup,
  BreakpointsTokenValueGroup,
  BreakpointsTokenName,
} from "../token-groups/breakpoints";

export type ValueAndMetaBreakpointsTokenGroup =
  typeof valueAndMetaBreakpointsTokenGroup;

/**
 * Направление медиа запросов.
 */
export type BreakpointsAliasDirection = "up" | "down" | "only";

/**
 * Коллекция медиа запросов по направлениям для данного токена - альяса.
 */
export type BreakpointsAliasDirectionMediaConditions = {
  [AliasDirection in BreakpointsAliasDirection]: string;
};

/**
 * Медиа запросы для всех токенов - альясов из группы `breakpoints`.
 */
export type BreakpointsMediaConditions = {
  [TokenName in BreakpointsTokenName]: BreakpointsAliasDirectionMediaConditions;
};

export function getMediaConditions(breakpoints: BreakpointsTokenValueGroup) {
  const breakpointEntries = Object.entries(breakpoints);
  const lastBreakpointIndex = breakpointEntries.length - 1;

  return Object.fromEntries(
    breakpointEntries.map(
      (
        entry,
        index
      ): [BreakpointsTokenName, BreakpointsAliasDirectionMediaConditions] => {
        const [breakpointsTokenName, breakpoint] =
          entry as Entry<BreakpointsTokenValueGroup>;

        const upMediaCondition = getUpMediaCondition(breakpoint);
        const downMediaCondition = getDownMediaCondition(breakpoint);
        const onlyMediaCondition =
          index === lastBreakpointIndex
            ? upMediaCondition
            : `${upMediaCondition} and ${getDownMediaCondition(
                breakpointEntries[index + 1][1] as string
              )}`;

        return [
          breakpointsTokenName,
          {
            // Медиа запрос для текущей точки и выше
            up: upMediaCondition,
            // Медиа запрос для текущей точки и ниже
            down: downMediaCondition,
            // Медиа запрос только для текущей точки
            only: onlyMediaCondition,
          },
        ];
      }
    )
  ) as BreakpointsMediaConditions;
}

function getUpMediaCondition(breakpoint: string) {
  return `(min-width: ${toEm(breakpoint)})`;
}

/**
 * Down media condition breakpoints are being subtracted by 0.04px to prevent
 * them from overwriting up media queries. We experimented with multiple offsets
 * and felt that 0.04px would be the safest across different pixel densities,
 * while being representable in ems with 4 decimal places of precision.
 */
function getDownMediaCondition(breakpoint: string) {
  const offsetBreakpoint = parseFloat(toPx(breakpoint) ?? "") - 0.04;
  return `(max-width: ${toEm(`${offsetBreakpoint}px`)})`;
}
