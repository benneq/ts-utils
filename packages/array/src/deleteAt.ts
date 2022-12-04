import { RelativeIndex } from "./_types";

/**
 * Removes elements of an Array at a given index
 *
 * @mutation
 *
 * @example
 * Delete a single element at index 1
 * ```ts
 * const array = [1, 2, 3];
 * deleteAt(1)(array);
 * console.log(array); // [1, 3]
 * ```
 *
 * @example
 * Delete two elements at index 1
 * ```ts
 * const array = [1, 2, 3, 4];
 * deleteAt(1, 2)(array);
 * console.log(array); // [1, 4]
 * ```
 *
 * @param array - the {@link Array} to modify
 * @param index - the index to start deletion
 * @param deleteCount - the optional number of elements to delete
 * @returns `true` if an element was deleted, otherwise `false`
 */
export const deleteAt =
  (index: RelativeIndex, deleteCount = 1) =>
  (array: unknown[]): boolean => {
    return !!array.splice(index, deleteCount).length;
  };
