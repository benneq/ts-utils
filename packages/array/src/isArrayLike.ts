/**
 * Checks if the provided value is ArrayLike, i.e. has a "length" property.
 *
 * @example
 * isArrayLike([]) => true
 * isArrayLike("") => true
 * isArrayLike({ length: 0 }) => true
 * isArrayLike(() => {}) => true
 *
 * @returns `true` if `value` is an ArrayLike, otherwise `false`
 */
export const isArrayLike = <T>(value: unknown): value is ArrayLike<T> => {
  return "length" in Object(value);
};
