import { deleteAt } from "./deleteAt";

/**
 * Removes the first element from an Array that is equal to a value.
 *
 * @mutation
 *
 * @example
 * Delete the first element equal to `2`
 * ```ts
 * const array = [1, 2, 3, 2];
 * deleteFirst(array, 2);
 * console.log(array); // [1, 3, 2]
 * ```
 *
 * @typeParam T - the {@link Array} element type
 * @param array - the {@link Array} to modify
 * @param value - the value to delete from the {@link Array}
 * @returns `true` if an element was deleted, otherwise `false`
 */
type DelteFirst = <T>(value: T) => (array: T[]) => boolean;

export const deleteFirst: DelteFirst =
  (value) =>
  (array, index = array.indexOf(value)) => {
    if (index >= 0) {
      return deleteAt(index)(array);
    }

    return false;
  };
