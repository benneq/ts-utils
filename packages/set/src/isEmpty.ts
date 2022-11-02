/**
 * Checks if a Set contains any element
 *
 * @example
 * isEmpty([]) => true
 * isEmpty([1,2]) => false
 *
 * @param set
 * @returns `true` if the Set is empty, otherwise `false`
 */
export const isEmpty = <T>(set: Set<T>): boolean => {
  return !set.size;
};
