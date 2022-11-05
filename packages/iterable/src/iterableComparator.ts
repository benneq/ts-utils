import { Comparator, undefinedFirst } from "@benneq/comparator";
import { zip } from "./zip";

/**
 * Creates a Comparator that compares the elements of two Iterables pairwise
 *
 * Finds the first unequal pair and returns the result
 *
 * If all pairs are equal the number of elements of the Iterables will be used for comparison
 *
 * @example
 * iterableComparator(numberComparator)([], []) => 0
 * iterableComparator(numberComparator)([1,2], [1,1]) => 1
 * iterableComparator(numberComparator)([1,1], [2]) => 1
 * iterableComparator(numberComparator)([], [0]) => -1
 *
 * @param comparator
 * @returns a Comparator for Iterables of type `T`
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
