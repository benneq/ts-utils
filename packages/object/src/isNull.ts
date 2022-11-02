/**
 * Checks if the provided value is `null`
 *
 * @example
 * isNull(null) => true
 * isNull(0) => false
 *
 * @returns `true` if `value` is `null`, otherwise `false`
 */
export const isNull = (value: unknown): value is null => {
  return value === null;
};
