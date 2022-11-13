/**
 * Checks if the provided value is a {@link Map}
 *
 * @example
 * ```ts
 * const value = new Map();
 * const result = isMap(value);
 * console.log(result); // true
 * ```
 *
 * @typeParam K - the {@link Map} key type
 * @typeParam V - the {@link Map} value type
 * @param value - the `value` to check
 * @returns `true` if `value` is a {@link Map}, otherwise `false`
 */
export const isMap = <K, V>(value: unknown): value is Map<K, V> => {
  return value instanceof Map;
};
