/**
 * Checks if the provided value is an {@link Iterable}
 *
 * @example
 * isIterable(null) => false
 * isIterable("") => true
 * isIterable([]) => true
 *
 * @returns `true` if `value` is an {@link Iterable}, otherwise `false`
 */
export const isIterable = <T>(value: unknown): value is Iterable<T> => {
  return Symbol.iterator in Object(value);
};
