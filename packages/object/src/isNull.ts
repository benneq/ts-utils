/**
 * Checks if a `value` is `null`
 *
 * The opposite of {@link isNotNull}
 *
 * @example
 * ```
 * const result = isNull(null);
 * console.log(result); // true
 * ```
 *
 * @example
 * ```
 * const result = isNull(0);
 * console.log(result); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is `null`, otherwise `false`
 */
export const isNull = (value: unknown): value is null => {
  return value === null;
};
