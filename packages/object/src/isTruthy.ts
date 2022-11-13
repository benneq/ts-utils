import { Truthy } from "./_types";

/**
 * Checks if a value is {@link Truthy}
 *
 * The opposite of {@link isFalsy}
 *
 * @example
 * ```
 * const b = isTruthy(1);
 * console.log(b); // true
 * ```
 *
 * @example
 * ```
 * const b = isTruthy(" ");
 * console.log(b); // true
 * ```
 *
 * @example
 * ```
 * const b = isTruthy(0);
 * console.log(b); // false
 * ```
 *
 * @example
 * ```
 * const b = isTruthy(null);
 * console.log(b); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is a Truthy, otherwise `false`
 */
export const isTruthy = <T>(value: T): value is Truthy<T> => {
  return !!value;
};
