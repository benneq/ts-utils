import { Truthy } from "./_types";

/**
 * Checks if a `value` is {@link Truthy}
 *
 * The opposite of {@link isFalsy}
 *
 * @example
 * ```
 * const result = isTruthy(1);
 * console.log(result); // true
 * ```
 *
 * @example
 * ```
 * const result = isTruthy(" ");
 * console.log(result); // true
 * ```
 *
 * @example
 * ```
 * const result = isTruthy(0);
 * console.log(result); // false
 * ```
 *
 * @example
 * ```
 * const result = isTruthy(null);
 * console.log(result); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is a Truthy, otherwise `false`
 */
export const isTruthy = <T>(value: T): value is Truthy<T> => {
  return !!value;
};
