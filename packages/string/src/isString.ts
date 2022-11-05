/**
 * Checks if a `value` is a String
 *
 * @example
 * Returns `true` if the `value` is a `String`
 * ```ts
 * const b = isString("");
 * console.log(b); // true
 * ```
 *
 * @example
 * Returns `false` if the `value` is not a `String`
 * ```ts
 * const b = isString(1);
 * console.log(b); // false
 * ```
 *
 * @returns `true` if `value` is a String, otherwise `false`
 */
export const isString = (value: unknown): value is string => {
  return typeof value === "string";
};
