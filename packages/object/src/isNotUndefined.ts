import { isUndefined } from "./isUndefined";

/**
 * Checks if a `value` is not `undefined`
 *
 * The opposite of {@link isUndefined}
 *
 * @example
 * ```
 * const result = isNotUndefined(0);
 * console.log(result); // true
 * ```
 *
 * @example
 * ```
 * const result = isNotUndefined(undefined);
 * console.log(result); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is not `undefined`, otherwise `false`
 */
export const isNotUndefined = <T>(value: T): value is Exclude<T, undefined> => {
  return !isUndefined(value);
};
