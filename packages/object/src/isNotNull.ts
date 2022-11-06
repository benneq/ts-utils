import { isNull } from "./isNull";

/**
 * Checks if a value is not `null`
 *
 * The opposite of {@link isNull}
 *
 * @example
 * ```
 * const b = isNotNull(0);
 * console.log(b); // true
 * ```
 *
 * @example
 * ```
 * const b = isNotNull(null);
 * console.log(b); // false
 * ```
 *
 * @returns `true` if `value` is not `null`, otherwise `false`
 */
export const isNotNull = <T>(value: T): value is Exclude<T, null> => {
  return !isNull(value);
};
