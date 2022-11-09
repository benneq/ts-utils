import { deleteAt } from "./deleteAt";

/**
 *
 * @mutation
 *
 * @example
 * ```ts
 * const array = [1,2,3,2];
 * deleteFirst(array, 2);
 * console.log(array); // [1,3,2]
 * ```
 *
 * @param array
 * @param predicate
 */
export const deleteFirst = <T>(array: T[], value: T) => {
  const index = array.indexOf(value);
  if (index > -1) {
    deleteAt(array, index);
  }
};
