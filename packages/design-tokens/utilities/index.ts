import { TokenGroup, TokenValueGroup } from "../types";
import type { Entry, Exact } from "./plain";

export function removeMetadata<T extends Exact<TokenGroup, T>>(tokenGroup: T) {
  return Object.fromEntries(
    Object.entries(tokenGroup).map((entry): Entry<TokenValueGroup> => {
      const [tokenName, { value }] = entry as Entry<TokenGroup>;

      return [tokenName, value];
    })
  ) as TokenValueGroup<T>;
}

export * from "./transforms-for-css";
export * from "./breakpoints";
export * from "./css";
export * from "./plain";
