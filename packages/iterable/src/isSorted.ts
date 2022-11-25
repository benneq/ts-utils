import { Comparator } from "@benneq/comparator";
import { pipe } from "@benneq/function";
import { Predicate } from "@benneq/predicate";
import { every } from "./every";
import { pairwise } from "./pairwise";

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
 * @returns the {@link Predicate}
 */
export const isSorted = <T>(
  comparator: Comparator<T>
): Predicate<[Iterable<T>]> => {
  return pipe(
    pairwise<T>,
    every<[T, T]>(([a, b]) => comparator(a, b) <= 0)
  );
};
