/**
 * Checks if a `value` is a {@link Set}.
 *
 * @example
 * Returns `true` if the value if a {@link Set}
 * ```ts
 * const result = isSet(new Set());
 * console.log(result); // true
 * ```
 *
 * @example
 * Returns `false` if the value is not as {@link Set}
 * ```ts
 * const result = isSet([]);
 * console.log(result); // false
 * ```
 *
 * @typeParam T - the {@link Set} element type
 * @param value - the value to check
 * @returns `true` if `value` is a {@link Set}, otherwise `false`
 */
export const isSet = <T>(value: unknown): value is Set<T> => {
  return value instanceof Set;
};
