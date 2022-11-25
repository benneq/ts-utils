/**
 * Checks if a value is an {@link Iterable}.
 *
 * @example
 * Is String iterable?
 * ```ts
 * const result = isIterable("");
 * console.log(result); // true
 * ```
 *
 * @example
 * Is Array iterable?
 * ```ts
 * const result = isIterable([]);
 * console.log(result); // true
 * ```
 *
 * @typeParam T - the {@link Iterable} element type
 * @param value - the value to check
 * @returns `true` if `value` is an {@link Iterable}, otherwise `false`
 */
export const isIterable = <T>(value: unknown): value is Iterable<T> => {
  return Symbol.iterator in Object(value);
};
