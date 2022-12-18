import { ColorSchemeDependentTokenGroups } from "../design-types";
import { TokenValueGroup } from "../types";

/**
 * @category Theme
 */
export const light: ColorSchemeDependentTokenGroups["colors"] = {
  surface1: { value: "#ffffff" },

  border: { value: "#323232" },
};

/**
 * @category Theme
 */
export const dark: ColorSchemeDependentTokenGroups["colors"] = {
  surface1: { value: "#151515" },

  border: { value: "#808080" },
};

export const colors = { light, dark };

export type ColorsTokenValueGroup = TokenValueGroup<
  ColorSchemeDependentTokenGroups["colors"]
>;
export type ColorsTokenName = keyof ColorsTokenValueGroup;
