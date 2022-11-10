/**
 * Add the value to the {@link Map} if it doesn't already have an entry with the same key
 *
 * @mutation
 *
 * @example
 * Override value if key exists
 * ```ts
 * const map = new Map([[1, 2]]);
 * replace(map)(1, 3);
 * console.log(map); // Map([[1, 3]])
 * ```
 *
 * @example
 * Override value if current value matches old value
 * ```ts
 * const map = new Map([[1, 2]]);
 * replace(map)(1, 2, 3);
 * console.log(map); // Map([[1, 3]])
 * ```
 *
 * @typeParam K - the {@link Map} key type
 * @typeParam V - the {@link Map} value type
 * @param map - the {@link Map} to set the entry
 */
export const replace: {
  <K, V>(map: Map<K, V>): {
    (key: K, value: V): void;
    (key: K, oldValue: V, newValue: V): void;
  };
} =
  (map) =>
  (key, value, value2: typeof value = value): void => {
    if ((value !== value2 && value !== map.get(key)) || !map.has(key)) {
      return;
    }

    map.set(key, value2);
  };
