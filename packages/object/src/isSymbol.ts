/**
 * Checks if the provided value is `symbol`
 *
 * @example
 * isSymbol(Symbol()) => true
 * isSymbol(0) => false
 *
 * @returns `true` if `value` is `symbol`, otherwise `false`
 */
export const isSymbol = (value: unknown): value is symbol => {
  return typeof value === "symbol";
};
