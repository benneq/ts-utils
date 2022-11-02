/**
 * Creates a Set with all keys of a Map
 *
 * @param map
 * @returns the Set containing all Map keys
 */
export const keySet = <K, V>(map: Map<K, V>): Set<K> => {
  return new Set(map.keys());
};
