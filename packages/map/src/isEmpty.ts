/**
 * Checks if a Map contains any entry
 *
 * @returns `true` if the Map is empty, otherwise `false`
 */
export const isEmpty = <K, V>(map: Map<K, V>): boolean => {
  return !map.size;
};
