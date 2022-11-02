/**
 * Checks if the provided value is a Number
 *
 * @example
 * isInteger(NaN) => true
 * isInteger(Infinity) => true
 * isInteger(0.5) => true
 * isInteger(0) => true
 * isInteger("") => false
 *
 * @returns `true` if `value` is a Number, otherwise `false`
 */
export const isNumber = (value: unknown): value is number => {
  return typeof value === "number";
};
