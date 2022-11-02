/**
 * Checks if the given index is in bounds of the provided Array
 *
 * @example
 * isIndex([])(0) => false
 * isIndex([1,2,3])(1) => true
 * isIndex([1])(-1) => false
 * isIndex([1])(3) => false
 * isIndex("abc")(2) => true
 *
 * @returns `true` if the index is between 0 and Array.length, otherwise `false`
 */
export const isIndex =
  <T>(array: ArrayLike<T>) =>
  (index: number): boolean => {
    return index >= 0 && index < array.length;
  };
