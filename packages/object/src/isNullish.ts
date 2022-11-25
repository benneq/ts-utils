import { isNull } from "./isNull";
import { isUndefined } from "./isUndefined";
import { Nullish } from "./_types";

/**
 * Checks if a `value` is {@link Falsy}
 *
 * The opposite of {@link isNotNullish}
 *
 * @example
 * ```
 * const result = isNullish(null);
 * console.log(result); // true
 * ```
 *
 * @example
 * ```
 * const result = isNullish(undefined);
 * console.log(result); // true
 * ```
 *
 * @example
 * ```
 * const result = isNullish(0);
 * console.log(result); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is Falsy, otherwise `false`
 */
export const isNullish = (value: unknown): value is Nullish => {
  return isUndefined(value) || isNull(value);
};
