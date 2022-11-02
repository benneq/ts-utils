/**
 * Copies all elements of an Array into a new Array
 *
 * @example
 * copy([]) => []
 * copy([1,2,3]) => [1,2,3]
 *
 * @param array
 * @returns a new Array containing all elements of the source Array
 */
export const copy = <T>(array: ArrayLike<T>): T[] => {
  return Array.from(array);
};
