import { Entry } from "@benneq/object";
import { multiMapRemove } from "./multiMapRemove";
import { MultiMap } from "./_types";

/**
 *
 * @mutation
 *
 * @example
 * ```ts
 * const multiMap = new Map<string, string[]>([["k", ["v1", "v2", "v3"]]]);
 * multiMapRemoveAll(multiMap, [["k", "v1"], ["k", "v2"]]);
 * console.log(multiMap); // Map([["k", ["v3"]]])
 * ```
 *
 */
export const multiMapRemoveAll =
  <K, V>(multiMap: MultiMap<K, V>) =>
  (entries: Entry<K, V>[]): void => {
    entries.forEach((entry) => multiMapRemove(multiMap)(...entry));
  };
