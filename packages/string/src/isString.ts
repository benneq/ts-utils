/**
 * Checks if the provided value is a String
 *
 * @example
 * isString("") => true
 * isString(1) => false
 * isString([]) => false
 *
 * @returns `true` if `value` is a String, otherwise `false`
 */
export const isString = (value: unknown): value is string => {
  return typeof value === "string";
};
