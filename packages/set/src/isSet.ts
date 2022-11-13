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
 * @returns `true` if `value` is a Set, otherwise `false`
 */
export const isSet = (value: unknown): value is Set<unknown> => {
  return value instanceof Set;
};
