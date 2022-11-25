import { isNullish } from "./isNullish";
import { Nullish } from "./_types";

/**
 * Checks if a `value` is not {@link Nullish}
 *
 * The opposite of {@link isNullish}
 *
 * @example
 * ```
 * const b = isNotNullish(0);
 * console.log(b); // true
 * ```
 *
 * @example
 * ```
 * const b = isNotNullish(null);
 * console.log(b); // false
 * ```
 *
 * @example
 * ```
 * const b = isNotNullish(undefined);
 * console.log(b); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is not Nullish, otherwise `false`
 */
export const isNotNullish = <T>(value: T): value is Exclude<T, Nullish> => {
  return !isNullish(value);
};
