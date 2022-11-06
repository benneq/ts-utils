/**
 * Checks if a value is `null`
 *
 * The opposite of {@link isNotNull}
 *
 * @example
 * ```
 * const b = isNull(null);
 * console.log(b); // true
 * ```
 *
 * @example
 * ```
 * const b = isNull(0);
 * console.log(b); // false
 * ```
 *
 * @returns `true` if `value` is `null`, otherwise `false`
 */
export const isNull = (value: unknown): value is null => {
  return value === null;
};
