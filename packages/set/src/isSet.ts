/**
 *
 * @example
 * Returns `true` if the value if a {@link Set}
 * ```ts
 * const b = isSet(new Set());
 * console.log(b); // true
 * ```
 *
 * @example
 * Returns `false` if the value is not as {@link Set}
 * ```ts
 * const b = isSet([]);
 * console.log(b); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is a Set, otherwise `false`
 */
export const isSet = <T>(value: unknown): value is Set<T> => {
  return value instanceof Set;
};
