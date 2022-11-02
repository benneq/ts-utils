/**
 * Checks if the provided value is a Map
 *
 * @example
 *
 * @returns `true` if `value` is a Map, otherwise `false`
 */
export const isMap = <K, V>(value: unknown): value is Map<K, V> => {
  return value instanceof Map;
};
