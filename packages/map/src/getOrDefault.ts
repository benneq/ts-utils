/**
 *
 * @example
 * Get a value from a {@link Map} or the `defaultValue` if the key is absent
 * ```ts
 * const map = new Map();
 * const value = getOrDefault(map)(1, 2);
 * console.log(value); // 2
 * ```
 *
 * @typeParam K - the {@link Map} key type
 * @typeParam V - the {@link Map} value type
 * @param map - the {@link Map} to set the entry
 */
export const getOrDefault =
  <K, V>(map: Map<K, V>) =>
  (key: K, defaultValue: V): V => {
    return map.has(key) ? (map.get(key) as V) : defaultValue;
  };
