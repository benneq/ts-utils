import { MultiMap } from "./_types";

/**
 *
 * @mutation
 *
 * @example
 * ```ts
 * const multiMap = new Map<string, string[]>();
 * add(multiMap, "k", "v");
 * console.log(multiMap); // Map([["k", ["v"]]])
 * ```
 *
 * @typeParam K - the {@link MultiMap} key type
 * @typeParam V - the {@link MultiMap} value type
 * @param multiMap - the {@link MultiMap} to add the entry to
 */
export const add =
  <K, V>(multiMap: MultiMap<K, V>) =>
  (key: K, value: V): MultiMap<K, V> => {
    const values = multiMap.get(key) || [];
    values.push(value);
    multiMap.set(key, values);
    return multiMap;
  };
