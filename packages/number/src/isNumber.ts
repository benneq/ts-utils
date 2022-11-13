/**
 * Checks if a `value` is a Number
 *
 * @example
 * Returns `true` if the `value` is a Number
 * ```ts
 * const b = isNumber(NaN);
 * console.log(b); // true
 * ```
 *
 * @example
 * Returns `false` if the `value` is not a Number
 * ```ts
 * const b = isNumber("");
 * console.log(b); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is a Number, otherwise `false`
 */
export const isNumber = (value: unknown): value is number => {
  return typeof value === "number";
};
