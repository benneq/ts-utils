import { isFunction } from "@benneq/function";

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
 * @param value - the value to check
 * @returns `true` if `value` is a {@link PromiseLike} object, otherwise `false`
 */
export const isPromiseLike = <T>(value: unknown): value is PromiseLike<T> => {
  return (
    !!value &&
    typeof value === "object" &&
    "then" in value &&
    isFunction((value as { then: unknown }).then)
  );
};
