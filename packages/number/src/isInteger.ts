/**
 * Checks if the provided value is an Integer
 *
 * @example
 * isInteger(NaN) => false
 * isInteger(Infinity) => false
 * isInteger(0.5) => false
 * isInteger(0) => true
 * isInteger("") => false
 *
 * @returns `true` if `value` is an Integer, otherwise `false`
 */
export const isInteger = (value: unknown): value is number => {
  return Number.isInteger(value);
};
