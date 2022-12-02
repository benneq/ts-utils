import { Predicate } from "@benneq/predicate";
import { deleteAt } from "./deleteAt";
import { findIndex } from "./findIndex";

/**
 * Removes the first element from an Array that matches a {@link Predicate}.
 *
 * @mutation
 *
 * @example
 * Square the first element equal to `2`
 * ```ts
 * const array = [1, 2, 3, 4];
 * findAndDelete(n => n % 2 === 0)(array);
 * console.log(array); // [1, 3]
 * ```
 *
 * @typeParam T - the {@link Array} element type
 * @param predicate - the {@link Predicate} to match
 */
export const findAndDelete =
  <T>(predicate: Predicate<[T]>, fromIndex?: number) =>
  (array: T[]): boolean => {
    const index = findIndex<T>(predicate, fromIndex)(array);

    if (index >= 0) {
      return deleteAt(index)(array);
    }

    return false;
  };
