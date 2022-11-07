/**
 * Creates a {@link Set} with all keys of a {@link Map}.
 *
 * @example
 * ```ts
 * const map = new Map([
 *   ["k1", "v1"],
 *   ["k2", "v2"]
 * ]);
 *
 * const keys = keySet(map);
 * console.log(keys); // Set(["k1", "k2"])
 * ```
 *
 * @param map - the Map to obtain the keys from
 * @returns the Set containing all Map keys
 */
export const keySet = <K, V>(map: Map<K, V>): Set<K> => {
  return new Set(map.keys());
};
