import { ColorSchemeDependentTokenGroups } from "../design-types";
import type { TokenValueGroup } from "../types";

export const light: ColorSchemeDependentTokenGroups["font"] = {
  "font-family-sans": {
    value:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', sans-serif",
  },
  "font-size-xs": {
    value: "12px",
  },
  "font-size-sm": {
    value: "14px",
  },
  "font-size-md": {
    value: "16px",
  },
  "font-size-lg": {
    value: "20px",
  },
  "font-size-xl": {
    value: "24px",
  },
  "font-size-xxl": {
    value: "28px",
  },
  "font-line-height-1": {
    value: "16px",
  },
  "font-line-height-2": {
    value: "20px",
  },
  "font-line-height-3": {
    value: "24px",
  },
  "font-line-height-4": {
    value: "28px",
  },
  "font-line-height-5": {
    value: "32px",
  },
  "font-line-height-6": {
    value: "40px",
  },
};

export const dark = light;

export const font = { light, dark };

export type FontTokenValueGroup = TokenValueGroup<
  ColorSchemeDependentTokenGroups["font"]
>;
export type FontTokenName = keyof FontTokenValueGroup;
