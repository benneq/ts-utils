import { Entry } from "@benneq/object";
import { multiMapAdd } from "./multiMapAdd";
import { MultiMap } from "./_types";

/**
 *
 * @mutation
 *
 * @example
 * ```ts
 * const multiMap = new Map<string, string[]>();
 * multiMapAddAll(multiMap, [["k", "v1"], ["k", "v2"]]);
 * console.log(multiMap); // Map([["k", ["v1", "v2"]]])
 * ```
 *
 */
export const multiMapAddAll =
  <K, V>(multiMap: MultiMap<K, V>) =>
  (entries: Entry<K, V>[]): void => {
    entries.forEach(([key, value]) => multiMapAdd(multiMap)(key, value));
  };
