/**
 * Removes elements of an Array at a given index
 *
 * @mutation
 *
 * @example
 * Delete a single element at index 1
 * ```ts
 * const array = [1, 2, 3];
 * deleteAt(array, 1);
 * console.log(array); // [1, 3]
 * ```
 *
 * @example
 * Delete two elements at index 1
 * ```ts
 * const array = [1,2,3,4];
 * deleteAt(array, 1, 2);
 * console.log(array); // [1, 4]
 * ```
 *
 * @param array
 * @param index
 */
export const deleteAt = (
  array: unknown[],
  index: number,
  deleteCount = 1
): void => {
  array.splice(index, deleteCount);
};
