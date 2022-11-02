/**
 * Checks if the provided value is an Array
 *
 * @exmaple
 * isArray(null) = false
 * isArray("") => false
 * isArray([]) => true
 *
 * @returns `true` if `value` is an Array, otherwise `false`
 */
export const isArray = <T>(value: unknown): value is Array<T> => {
  return Array.isArray(value);
};
