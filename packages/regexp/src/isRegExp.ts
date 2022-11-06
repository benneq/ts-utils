/**
 * Checks if a value is of type RegExp
 *
 * @example
 * ```
 * const b = isRegExp(/.+/);
 * console.log(b); // true
 * ```
 *
 * @example
 * ```
 * const b = isRegExp(".+");
 * console.log(b); // false
 * ```
 *
 * @returns `true` if `value` is an RegExp, otherwise `false`
 */
export const isRegExp = (value: unknown): value is RegExp => {
  return value instanceof RegExp;
};
