import { Comparator } from "@benneq/comparator";
import { Predicate } from "@benneq/predicate";
import { every } from "./every";

/**
 * Creates a {@link Predicate} function that checks if all elements of an
 * {@link Array} are monotonic sorted according to a {@link Comparator}.
 *
 * @exmaple
 * Check if `array` is sorted
 * ```ts
 * const isMonotoneSortedByNumber = isMonotone(numberComparator);
 * const array = [1,2,3];
 * const result = isMonotoneSortedByNumber(array);
 * console.log(result); // true
 * ```
 *
 * @typeParam T - the {@link Array} value type
 * @param comparator - the {@link Comparator} to use
 * @returns the {@link Predicate}
 */
export const isMonotone = <T>(
  comparator: Comparator<T>
): Predicate<[ArrayLike<T>]> => {
  return every<T>(
    (value, index, array) =>
      !index || comparator(array[index - 1] as T, value) < 0
  );
};
