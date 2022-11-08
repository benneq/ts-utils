import { Entry } from "@benneq/object";
import { add } from "./add";
import { MultiMap } from "./_types";

/**
 *
 * @mutation
 *
 * @example
 * ```ts
 * const multiMap = new Map<string, string[]>();
 * addAll(multiMap, [["k", "v1"], ["k", "v2"]]);
 * console.log(multiMap); // Map([["k", ["v1", "v2"]]])
 * ```
 *
 * @typeParam K - the {@link MultiMap} key type
 * @typeParam V - the {@link MultiMap} value type
 * @param multiMap - the {@link MultiMap} to add the entries to
 */
export const addAll =
  <K, V>(multiMap: MultiMap<K, V>) =>
  (entries: Entry<K, V>[]): void => {
    entries.forEach((entry) => add(multiMap)(...entry));
  };
