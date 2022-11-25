/**
 * Checks if a `value` is of type `boolean`.
 *
 * @example
 * ```
 * const result = isBoolean(true);
 * console.log(result); // true
 * ```
 *
 * @example
 * ```
 * const result = isBoolean(false);
 * console.log(result); // true
 * ```
 *
 * @example
 * ```
 * const result = isBoolean(0);
 * console.log(result); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is `boolean`, otherwise `false`
 */
export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === "boolean";
};
