/**
 * Checks if a `value` is a {@link RegExp}.
 *
 * @example
 * ```
 * const result = isRegExp(/.+/);
 * console.log(result); // true
 * ```
 *
 * @example
 * ```
 * const result = isRegExp(".+");
 * console.log(result); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is a {@link RegExp}, otherwise `false`
 */
export const isRegExp = (value: unknown): value is RegExp => {
  return value instanceof RegExp;
};
