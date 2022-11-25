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
 * const b = isNullish(null);
 * console.log(b); // true
 * ```
 *
 * @example
 * ```
 * const b = isNullish(undefined);
 * console.log(b); // true
 * ```
 *
 * @example
 * ```
 * const b = isNullish(0);
 * console.log(b); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is Falsy, otherwise `false`
 */
export const isNullish = (value: unknown): value is Nullish => {
  return isUndefined(value) || isNull(value);
};
