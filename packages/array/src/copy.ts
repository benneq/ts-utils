/**
 * Copies all elements of an Array into a new Array
 *
 * @example
 * Copy an Array
 * ```ts
 * const array = [1, 2, 3];
 * const copiedArray = copy(array);
 * console.log(copiedArray); // [1, 2, 3]
 * console.log(array === copiedArray); // false
 * ```
 *
 * @returns a new Array containing all elements of the source Array
 */
export const copy = <T>(array: ArrayLike<T>): T[] => {
  return Array.from(array);
};
