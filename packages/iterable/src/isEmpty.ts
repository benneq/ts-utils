/**
 * Checks if an {@link Iterable} contains any element
 *
 * @remarks
 * This function will consume the first element
 *
 * @example
 * ```ts
 * const iterable = [];
 * const result = isEmtpy(iterable);
 * console.log(result); // true
 * ```
 *
 * @typeParam T - the {@link Iterable} value type
 * @param iterable - the {@link Iterable} to check
 * @returns `true` if the {@link Iterable} is empty, otherwise `false`
 */
export const isEmpty = <T>(iterable: Iterable<T>): boolean => {
  for (const _ of iterable) {
    return false;
  }
  return true;
};
