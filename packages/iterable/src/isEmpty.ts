/**
 * Checks if an {@link Iterable} contains any element
 *
 * @remark
 * This function will consume the first element
 *
 * @example
 * isEmpty([]) => true
 * isEmpty([1,2,3]) => false
 *
 * @typeParam T - the {@link Iterable} value type
 * @param iterable
 * @returns `true` if the {@link Iterable} is empty, otherwise `false`
 */
export const isEmpty = <T>(iterable: Iterable<T>): boolean => {
  for (const _ of iterable) {
    return false;
  }
  return true;
};
