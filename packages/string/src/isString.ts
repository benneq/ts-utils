/**
 * Checks if a `value` is a String
 *
 * @example
 * Returns `true` if the `value` is a `String`
 * ```ts
 * const result = isString("");
 * console.log(result); // true
 * ```
 *
 * @example
 * Returns `false` if the `value` is not a `String`
 * ```ts
 * const result = isString(1);
 * console.log(result); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is a String, otherwise `false`
 */
export const isString = (value: unknown): value is string => {
  return typeof value === "string";
};
