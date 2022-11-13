/**
 * Checks if a value is {@link ArrayLike}, i.e. has a `length` property.
 *
 * @example
 * isArrayLike([]) => true
 * isArrayLike("") => true
 * isArrayLike({ length: 0 }) => true
 * isArrayLike(() => {}) => true
 *
 * @typeParam T - the {@link Array} element type
 * @param value - the value to check
 * @returns `true` if `value` is an {@link ArrayLike}, otherwise `false`
 */
export const isArrayLike = <T>(value: unknown): value is ArrayLike<T> => {
  return "length" in Object(value);
};
