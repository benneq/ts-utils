import { isNull } from "./isNull";

/**
 * Checks if a `value` is not `null`
 *
 * The opposite of {@link isNull}
 *
 * @example
 * ```
 * const result = isNotNull(0);
 * console.log(result); // true
 * ```
 *
 * @example
 * ```
 * const result = isNotNull(null);
 * console.log(result); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is not `null`, otherwise `false`
 */
export const isNotNull = <T>(value: T): value is Exclude<T, null> => {
  return !isNull(value);
};
