/**
 * Copies all entries of a Map into a new Map
 *
 * @param map
 * @returns a new Map containing all entries of the source Map
 */
export const copy = <K, V>(map: Map<K, V>): Map<K, V> => {
  return new Map(map);
};
