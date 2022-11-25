/**
 * Checks if a `value` is an object.
 *
 * "object" in terms of this function means a regular object with `string` or
 * {@link Symbol} properties.
 *
 * @remarks
 * This function does not behave the same as JavaScript's `typeof` operator,
 * which returns `"object"` also for {@link Array}s and `null`.
 *
 * @example
 * ```
 * const result = isObject({});
 * console.log(result); // true
 * ```
 *
 * @example
 * ```
 * const result = isObject([]);
 * console.log(result); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is an object, otherwise `false`
 */
export const isObject = <T extends { [key: string | symbol]: unknown }>(
  value: unknown
): value is T => {
  return !!value && typeof value === "object" && !Array.isArray(value);
};
