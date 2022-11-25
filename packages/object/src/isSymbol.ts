/**
 * Checks if a `value` is of type `symbol`
 *
 * @example
 * ```
 * const result = isSymbol(Symbol());
 * console.log(result); // true
 * ```
 *
 * @example
 * ```
 * const result = isSymbol(0);
 * console.log(result); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is `symbol`, otherwise `false`
 */
export const isSymbol = (value: unknown): value is symbol => {
  return typeof value === "symbol";
};
