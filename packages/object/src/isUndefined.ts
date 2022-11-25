/**
 * Checks if a `value` is `undefined`
 *
 * The opposite of {@link isNotUndefined}
 *
 * @example
 * ```
 * const result = isUndefined(undefined);
 * console.log(result); // true
 * ```
 *
 * @example
 * ```
 * const result = isUndefined(0);
 * console.log(result); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is `undefined`, otherwise `false`
 */
export const isUndefined = (value: unknown): value is undefined => {
  return value === undefined;
};
