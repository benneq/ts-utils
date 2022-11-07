import { MultiMap } from "./_types";

/**
 *
 * @mutation
 *
 * @example
 * ```ts
 * const multiMap = new Map<string, string[]>();
 * multiMapAdd(multiMap, "a", "b");
 * console.log(multiMap); // Map([["a", ["b"]]])
 * ```
 *
 */
export const multiMapAdd =
  <K, V>(multiMap: MultiMap<K, V>) =>
  (key: K, value: V): void => {
    const values = multiMap.get(key) || [];
    values.push(value);
    multiMap.set(key, values);
  };
