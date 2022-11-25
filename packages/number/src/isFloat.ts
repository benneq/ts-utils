/**
 * Checks if a `value` is a Float
 *
 * @example
 * Returns `true` if the `value` is a Float
 * ```ts
 * const result = isFloat(0.5);
 * console.log(result); // true
 * ```
 *
 * @example
 * Returns `false` if the `value` is not a Float
 * ```ts
 * const result = isFloat(NaN);
 * console.log(result); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is a Float, otherwise `false`
 */
export const isFloat = (value: unknown): value is number => {
  return Number.isFinite(value);
};
