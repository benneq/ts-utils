/**
 * Add the value to the Map if it doesn't already have an entry with the same key
 *
 * @example
 * setIfAbsent(new Map([[1, 2]]), 1, 3) => new Map([[1, 2]])
 * setIfAbsent(new Map([[1, 2]]), 2, 3) => new Map([[1, 2], [2, 3]])
 *
 * @param map
 * @param key
 * @param value
 */
export const setIfAbsent = <K, V>(map: Map<K, V>, key: K, value: V): void => {
  map.has(key) || map.set(key, value);
};
