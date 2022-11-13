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
 * deleteIf(array, n => n % 2 === 0);
 * console.log(array); // [1, 3]
 * ```
 *
 * @param array
 * @param predicate
 */
export const deleteIf = <T>(array: T[], predicate: Predicate<[T]>) => {
  array.forEach(
    (element, index) => predicate(element) && deleteAt(array, index)
  );
};
