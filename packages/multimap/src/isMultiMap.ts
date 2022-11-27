import { MultiMap } from "./multiMap";

/**
 * Checks if a `value` is a {@link MultiMap}.
 *
 * @example
 * Returns `true` if the value is a {@link MultiMap}
 * ```ts
 * const value = new MultiMap();
 * const result = isMultiMap(value);
 * console.log(result); // true
 * ```
 *
 * @typeParam K - the {@link MultiMap} key type
 * @typeParam V - the {@link MultiMap} value type
 * @param value - the value to check
 * @returns `true` if `value` is a {@link MultiMap}, otherwise `false`
 */
export const isMultiMap = <K, V>(value: unknown): value is MultiMap<K, V> => {
  return value instanceof MultiMap;
};
