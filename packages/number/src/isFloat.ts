/**
 * Checks if a `value` is a Float
 *
 * @example
 * Returns `true` if the `value` is a Float
 * ```ts
 * const b = isFloat(0.5);
 * console.log(b); // true
 * ```
 *
 * @example
 * Returns `false` if the `value` is not a Float
 * ```ts
 * const b = isFloat(NaN);
 * console.log(b); // false
 * ```
 *
 * @returns `true` if `value` is a Float, otherwise `false`
 */
export const isFloat = (value: unknown): value is number => {
  return Number.isFinite(value);
};
