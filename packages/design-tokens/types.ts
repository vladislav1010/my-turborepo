export interface TokenMetadataAndValue {
  description?: string;
  value: string;
}

export interface TokenGroup {
  [token: string]: TokenMetadataAndValue;
}

export interface TokensBase {
  [tokenGroup: string]: TokenGroup;
}

export type TokenValueGroup<T extends TokenGroup = TokenGroup> = {
  [K in keyof T]: T[K]["value"];
};
