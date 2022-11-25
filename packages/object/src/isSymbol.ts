/**
 * Checks if a `value` is of type `symbol`
 *
 * @example
 * ```
 * const b = isSymbol(Symbol());
 * console.log(b); // true
 * ```
 *
 * @example
 * ```
 * const b = isSymbol(0);
 * console.log(b); // false
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is `symbol`, otherwise `false`
 */
export const isSymbol = (value: unknown): value is symbol => {
  return typeof value === "symbol";
};
