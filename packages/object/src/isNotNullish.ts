import { isNullish } from "./isNullish";
import { Nullish } from "./_types";

/**
 * Checks if a `value` is not {@link Nullish}
 *
 * The opposite of {@link isNullish}
 *
 * @example
 * ```
 * const result = isNotNullish(0);
 * console.log(result); // true
 * ```
 *
 * @example
 * ```
 * const result = isNotNullish(null);
 * console.log(result); // false
 * ```
 *
 * @example
 * ```
 * const result = isNotNullish(undefined);
 * console.log(result); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is not Nullish, otherwise `false`
 */
export const isNotNullish = <T>(value: T): value is Exclude<T, Nullish> => {
  return !isNullish(value);
};
