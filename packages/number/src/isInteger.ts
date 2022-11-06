/**
 * Checks if a `value` is an Integer
 *
 * @example
 * Returns `true` if the `value` is an Integer
 * ```ts
 * const b = isInteger(0);
 * console.log(b); // true
 * ```
 *
 * @example
 * Returns `false` if the `value` is not an Integer
 * ```ts
 * const b = isInteger(0.5);
 * console.log(b); // false
 * ```
 *
 * @returns `true` if `value` is an Integer, otherwise `false`
 */
export const isInteger = (value: unknown): value is number => {
  return Number.isInteger(value);
};
