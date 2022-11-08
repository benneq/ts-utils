/**
 * Add the value to the {@link Map} if it doesn't already have an entry with the same key
 *
 * @mutation
 *
 * @example
 * Set a {@link Map} entry if the key is absent
 * ```ts
 * const map = new Map();
 * setIfAbsent(map, 1, 2);
 * console.log(map); // Map([[1, 2]])
 * ```
 *
 * @typeParam K - the {@link Map} key type
 * @typeParam V - the {@link Map} value type
 * @param map - the {@link Map} to set the entry
 */
export const setIfAbsent =
  <K, V>(map: Map<K, V>) =>
  (key: K, value: V): void => {
    map.has(key) || map.set(key, value);
  };
