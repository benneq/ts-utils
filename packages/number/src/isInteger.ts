/**
 * Checks if a `value` is an Integer
 *
 * @example
 * Returns `true` if the `value` is an Integer
 * ```ts
 * const result = isInteger(0);
 * console.log(result); // true
 * ```
 *
 * @example
 * Returns `false` if the `value` is not an Integer
 * ```ts
 * const result = isInteger(0.5);
 * console.log(result); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is an Integer, otherwise `false`
 */
export const isInteger = (value: unknown): value is number => {
  return Number.isInteger(value);
};
