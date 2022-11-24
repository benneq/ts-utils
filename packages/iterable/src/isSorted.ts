import { Comparator } from "@benneq/comparator";
import { every } from "./every";

/**
 * Creates a {@link Predicate} function that checks if all elements of an
 * {@link Iterable} are sorted according to a {@link Comparator}.
 *
 * @exmaple
 * Check if `iterable` is sorted
 * ```ts
 * const isSortedByNumber = isSorted(numberComparator);
 * const iterable = [1,2,3];
 * const result = isSortedByNumber(iterable);
 * console.log(result); // true
 * ```
 *
 * @typeParam T - the {@link Iterable} value type
 * @param comparator - the {@link Comparator} to use
 * @returns `true` is the {@link Iterable} is sorted, otherwise `false`
 */
export const isSorted = <T>(
  comparator: Comparator<T>
): ((iterable: Iterable<T>) => boolean) => {
  let prev: T | undefined = undefined;

  return every((value) => {
    if (prev === undefined) {
      prev = value;
      return true;
    }

    const result = comparator(prev, value) <= 0;
    prev = value;
    return result;
  });
};
