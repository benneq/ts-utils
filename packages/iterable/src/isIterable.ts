/**
 * Checks if the provided value is an {@link Iterable}
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
 * @returns `true` if `value` is an {@link Iterable}, otherwise `false`
 */
export const isIterable = (value: unknown): value is Iterable<unknown> => {
  return Symbol.iterator in Object(value);
};
