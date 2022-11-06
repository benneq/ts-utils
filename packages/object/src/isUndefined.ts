/**
 * Checks if a value is `undefined`
 *
 * The opposite of {@link isNotUndefined}
 *
 * @example
 * ```
 * const b = isUndefined(undefined);
 * console.log(b); // true
 * ```
 *
 * @example
 * ```
 * const b = isUndefined(0);
 * console.log(b); // false
 * ```
 *
 * @returns `true` if `value` is `undefined`, otherwise `false`
 */
export const isUndefined = (value: unknown): value is undefined => {
  return value === undefined;
};
