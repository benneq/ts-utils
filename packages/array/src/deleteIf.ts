import { Predicate } from "@benneq/predicate";
import { deleteAt } from "./deleteAt";

/**
 * Remove all elements from an Array that match a {@link Predicate}.
 *
 * @mutation
 *
 * @example
 * Remove all even numbers
 * ```ts
 * const array = [1, 2, 3];
 *
 * deleteIf(array, n => n % 2 === 0);
 *
 * console.log(array); // [1, 3]
 * ```
 *
 * @typeParam T - the {@link Array} element type
 * @param predicate
 */
export const deleteIf =
  <T>(predicate: Predicate<[T, number]>) =>
  (array: T[]) =>
    array.forEach(
      (element, index) => predicate(element, index) && deleteAt(index)(array)
    );
