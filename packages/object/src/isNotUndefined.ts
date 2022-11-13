import { isUndefined } from "./isUndefined";

/**
 * Checks if a value is not `undefined`
 *
 * The opposite of {@link isUndefined}
 *
 * @example
 * ```
 * const b = isNotUndefined(0);
 * console.log(b); // true
 * ```
 *
 * @example
 * ```
 * const b = isNotUndefined(undefined);
 * console.log(b); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is not `undefined`, otherwise `false`
 */
export const isNotUndefined = <T>(value: T): value is Exclude<T, undefined> => {
  return !isUndefined(value);
};
