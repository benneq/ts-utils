import { Comparator } from "@benneq/comparator";
import { Predicate } from "@benneq/predicate";

/**
 * Creates a {@link Predicate} function that checks if all elements of an
 * {@link Array} are sorted according to a {@link Comparator}.
 *
 * @exmaple
 * Check if `array` is sorted
 * ```ts
 * const isSortedByNumber = isSorted(numberComparator);
 * const array = [1,2,2,3];
 * const result = isSortedByNumber(array);
 * console.log(result); // true
 * ```
 *
 * @typeParam T - the {@link Array} value type
 * @param comparator - the {@link Comparator} to use
 * @returns the {@link Predicate}
 */
export const isSorted = <T>(
  comparator: Comparator<T>
): Predicate<[readonly T[]]> => {
  return (array) =>
    array.every(
      (value, index) => !index || comparator(array[index - 1] as T, value) <= 0
    );
};
