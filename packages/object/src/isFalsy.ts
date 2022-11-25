import { Falsy } from "./_types";

/**
 * Checks if a `value` is {@link Falsy}
 *
 * The opposite of {@link isTruthy}
 *
 * @example
 * ```
 * const result = isFalsy(0);
 * console.log(result); // true
 * ```
 *
 * @example
 * ```
 * const result = isFalsy(null);
 * console.log(result); // true
 * ```
 *
 * @example
 * ```
 * const result = isFalsy(1);
 * console.log(result); // false
 * ```
 *
 * @example
 * ```
 * const result = isFalsy(" ");
 * console.log(result); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is Falsy, otherwise `false`
 */
export const isFalsy = (value: unknown): value is Falsy => {
  return !value;
};
