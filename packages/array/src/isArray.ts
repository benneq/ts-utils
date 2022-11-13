/**
 * Checks if a value is an Array
 *
 * @example
 * isArray(null) = false
 * isArray("") => false
 * isArray([]) => true
 *
 * @typeParam T - the {@link Array} element type
 * @param value - the value to check
 * @returns `true` if `value` is an Array, otherwise `false`
 */
export const isArray = <T>(value: unknown): value is ReadonlyArray<T> => {
  return Array.isArray(value);
};
