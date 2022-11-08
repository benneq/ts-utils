import { MultiMap } from "./_types";

/**
 *
 * @mutation
 *
 * @example
 * ```ts
 * const multiMap = new Map([["k", ["v1", "v2"]]]);
 * multiMapRemove(multiMap, "k", "v1");
 * console.log(multiMap); // Map([["k", ["v2"]]])
 * ```
 *
 * @typeParam K - the {@link MultiMap} key type
 * @typeParam V - the {@link MultiMap} value type
 * @param multiMap - the {@link MultiMap} to remove the entry from
 */

export const multiMapRemove =
  <K, V>(multiMap: MultiMap<K, V>) =>
  (key: K, value: V): void => {
    const values = multiMap.get(key);

    if (values) {
      const index = values.indexOf(value);
      if (index > -1) {
        values.splice(index, 1);
      }
    }
  };
