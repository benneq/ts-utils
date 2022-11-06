/**
 * Checks if an Iterable contains any element
 *
 * @remark
 * This function will consume the first element
 *
 * @example
 * isEmpty([]) => true
 * isEmpty([1,2,3]) => false
 *
 * @param iterable
 * @returns `true` if the Iterable is empty, otherwise `false`
 */
export const isEmpty = <T>(iterable: Iterable<T>): boolean => {
  for (const _ of iterable) {
    return false;
  }
  return true;
};
