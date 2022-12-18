import type { TokenMetadataAndValue, TokenValueGroup } from "./types";

/**
 * @category Theme
 */
export type ColorSchemeDependentTokenGroups = {
  colors: Record<"surface1" | "border", TokenMetadataAndValue>;
  font: Record<
    | "font-family-sans"
    | "font-size-xs"
    | "font-size-sm"
    | "font-size-md"
    | "font-size-lg"
    | "font-size-xl"
    | "font-size-xxl"
    | "font-line-height-1"
    | "font-line-height-2"
    | "font-line-height-3"
    | "font-line-height-4"
    | "font-line-height-5"
    | "font-line-height-6",
    TokenMetadataAndValue
  >;
};

/**
 * @category Theme
 */
export type ColorScheme = "light" | "dark" | "auto";

/**
 * @hidden
 */
export type DeepPartial<Type> = {
  [Property in keyof Type]?: DeepPartial<Type[Property]>;
};
