/**
 * Checks if a `value` is a Number
 *
 * @example
 * Returns `true` if the `value` is a Number
 * ```ts
 * const result = isNumber(NaN);
 * console.log(result); // true
 * ```
 *
 * @example
 * Returns `false` if the `value` is not a Number
 * ```ts
 * const result = isNumber("");
 * console.log(result); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is a Number, otherwise `false`
 */
export const isNumber = (value: unknown): value is number => {
  return typeof value === "number";
};
