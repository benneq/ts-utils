/**
 * Checks if a value is of type `boolean`
 *
 * @example
 * ```
 * const b = isBoolean(true);
 * console.log(b); // true
 * ```
 *
 * @example
 * ```
 * const b = isBoolean(false);
 * console.log(b); // true
 * ```
 *
 * @example
 * ```
 * const b = isBoolean(0);
 * console.log(b); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is `boolean`, otherwise `false`
 */
export const isBoolean = (value: unknown): value is boolean => {
  return typeof value === "boolean";
};
