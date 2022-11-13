/**
 * Clears the contents of an Array
 *
 * @mutation
 *
 * @example
 * Remove all elements
 * ```ts
 * const array = [1, 2, 3];
 * clear(array);
 * console.log(array); // []
 * ```
 *
 * @param array - the Array to clear
 */
export const clear = (array: Array<unknown>): void => {
  array.length = 0;
};
