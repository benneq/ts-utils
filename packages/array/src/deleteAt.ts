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
 * const array = [1, 2, 3, 4];
 * deleteAt(array, 1, 2);
 * console.log(array); // [1, 4]
 * ```
 *
 * @param array - the {@link Array} to modify
 * @param index - the index to start deletion
 * @param deleteCount - the optional number of elements to delete
 * @returns `true` if an element was deleted, otherwise `false`
 */
export const deleteAt = (
  array: unknown[],
  index: number,
  deleteCount = 1
): boolean => {
  return !!array.splice(index, deleteCount).length;
};
