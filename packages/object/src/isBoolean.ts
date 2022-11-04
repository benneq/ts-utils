/**
 * Checks if the provided value is `boolean`
 *
 * @example
 * isBoolean(false) => true
 * isBoolean(true) => true
 * isBoolean(0) => false
 *
 * @returns `true` if `value` is `boolean`, otherwise `false`
 */
export const isBoolean = (value: unknown): value is boolean => {
  return typeof value == "boolean";
};
