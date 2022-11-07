/**
 * Add the value to the Map if it doesn't already have an entry with the same key
 *
 * @mutation
 *
 * @example
 * Set a Map entry if the key is absent
 * ```ts
 * const map = new Map();
 * setIfAbsent(map, 1, 2);
 * console.log(map); // Map([[1, 2]])
 * ```
 */
export const setIfAbsent =
  <K, V>(map: Map<K, V>) =>
  (key: K, value: V): void => {
    map.has(key) || map.set(key, value);
  };
