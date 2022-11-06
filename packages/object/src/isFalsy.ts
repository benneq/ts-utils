import { Falsy } from "./_types";

/**
 * Checks if a value is {@link Falsy}
 *
 * The opposite of {@link isTruthy}
 *
 * @example
 * ```
 * const b = isFalsy(0);
 * console.log(b); // true
 * ```
 *
 * @example
 * ```
 * const b = isFalsy(null);
 * console.log(b); // true
 * ```
 *
 * @example
 * ```
 * const b = isFalsy(1);
 * console.log(b); // false
 * ```
 *
 * @example
 * ```
 * const b = isFalsy(" ");
 * console.log(b); // false
 * ```
 *
 * @returns `true` if `value` is Falsy, otherwise `false`
 */
export const isFalsy = (value: unknown): value is Falsy => {
  return !value;
};
