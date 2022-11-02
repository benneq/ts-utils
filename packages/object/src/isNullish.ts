import { isNull } from "./isNull";
import { isUndefined } from "./isUndefined";
import { Nullish } from "./_types";

/**
 * Checks if the provided value is Falsy
 *
 * @example
 * isNullish(null) => true
 * isNullish(undefined) => true
 * isNullish("") => false
 * isNullish([]) => false
 * isNullish(object) = false
 *
 * @returns `true` if `value` is Falsy, otherwise `false`
 */
export const isNullish = (value: unknown): value is Nullish => {
  return isUndefined(value) || isNull(value);
};
