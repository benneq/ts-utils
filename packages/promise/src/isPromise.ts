/**
 * Checks if a `value` is a {@link Promise}.
 *
 * @example
 * Returns `true` if the value is a {@link Promise}
 * ```ts
 * const value = new Promise(() => {});
 * const result = isPromise(value);
 * console.log(result); // true
 * ```
 *
 * @param value - the value to check
 * @returns `true` if `value` is a {@link Promise}, otherwise `false`
 */
export const isPromise = <T>(value: unknown): value is Promise<T> => {
  return value instanceof Promise;
};
