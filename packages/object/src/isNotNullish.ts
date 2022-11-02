import { isNullish } from "./isNullish";
import { Nullish } from "./_types";

/**
 * Checks if the provided value is not Nullish
 *
 * @example
 * isNotNullish(0) => true
 * isNotNullish(null) => false
 * isNotNullish(undefined) => false
 *
 * @returns `true` if `value` is not Nullish, otherwise `false`
 */
export const isNotNullish = <T>(value: T): value is Exclude<T, Nullish> => {
  return !isNullish(value);
};
