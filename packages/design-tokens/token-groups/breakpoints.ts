import type { TokenValueGroup } from "../types";

export const breakpoints = {
  "breakpoints-xs": {
    value: "0px",
  },
  "breakpoints-sm": {
    value: "490px",
  },
  "breakpoints-md": {
    value: "768px",
  },
  "breakpoints-lg": {
    value: "1040px",
  },
  "breakpoints-xl": {
    value: "1440px",
  },
};

export type BreakpointsTokenValueGroup = TokenValueGroup<typeof breakpoints>;
export type BreakpointsTokenName = keyof BreakpointsTokenValueGroup;

export const breakpointsAlias = ["xs", "sm", "md", "lg", "xl"] as const;
export type BreakpointsAlias = typeof breakpointsAlias[number];
