import { isFunction } from "@benneq/function";
import { isObject } from "@benneq/object";

/**
 * Checks if a `value` is a {@link PromiseLike} object.
 *
 * @example
 * Returns `true` if the value is a {@link PromiseLike} object
 * ```ts
 * const value = new Promise(() => {});
 * const result = isPromiseLike(value);
 * console.log(result); // true
 * ```
 *
 * @typeParam T - the {@link PromisLike} value type
 * @param value - the value to check
 * @returns `true` if `value` is a {@link PromiseLike} object, otherwise `false`
 */
export const isPromiseLike = <T>(value: unknown): value is PromiseLike<T> => {
  return isObject(value) && "then" in value && isFunction(value["then"]);
};
