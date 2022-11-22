import { Comparator, undefinedFirst } from "@benneq/comparator";
import { zip } from "./zip";

/**
 * Creates a {@link Comparator} that compares the elements of two
 * {@link Iterable}s pairwise.
 *
 * Finds the first unequal pair and returns the result
 *
 * If all pairs are equal, the number of elements of the {@link Iterable}s will
 * be used for the comparison result.
 *
 * @example
 * Compare {@link Iterable}s of numbers
 * ```ts
 * const numberIterableComparator = iterableComparator(numberComparator);
 * const result = numberIterableComparator([1, 2], [1, 1]);
 * console.log(result); // 1
 * ```
 *
 * @example
 * Compare {@link Iterable}s with different lengths
 * ```ts
 * const numberIterableComparator = iterableComparator(numberComparator);
 * const result = numberIterableComparator([1, 1], [2]);
 * console.log(result); // 1
 * ```
 *
 * @typeParam T - the {@link Iterable} value type
 * @param comparator - the {@link Comparator} to use for the comparison of the elements
 * @returns a {@link Comparator} for {@link Iterable}s of type `T`
 */
export const iterableComparator = <T>(
  comparator: Comparator<T>
): Comparator<Iterable<T>> => {
  comparator = undefinedFirst(comparator);

  return (iterableA, iterableB) => {
    for (const [valueA, valueB] of zip(iterableA, iterableB)) {
      const result = comparator(valueA, valueB);
      if (result) {
        return result;
      }
    }
    return 0;
  };
};
