import { Comparator } from "../../comparator/src/_types";

/**
 * Creates a {@link @benneq/comparator!Comparator} that compares the elements of two
 * {@link Array}s pairwise.
 *
 * Finds the first unequal pair and returns the result.
 *
 * If all pairs are equal the Array's `length` will be used for comparison.
 *
 * @example
 * Compare two {@link Array}s of numbers
 * ```ts
 * const numberArrayComparator = arrayComparator(numberComparator);
 * const result = numberArrayComparator([1, 1], [2]);
 * console.log(result); // 1
 * ```
 *
 * @typeParam T - the {@link @benneq/comparator!Comparator} value type
 * @param comparator - the {@link @benneq/comparator!Comparator} to use for the elements
 * @returns a {@link @benneq/comparator!Comparator} for {@link Array}s of type `T`
 */
export const arrayComparator = <T>(
  comparator: Comparator<T>
): Comparator<ArrayLike<T>> => {
  return (
    arrayA,
    arrayB,
    aLength = arrayA.length,
    bLength = arrayB.length,
    length = aLength < bLength ? aLength : bLength,
    i = 0
  ) => {
    while (i < length) {
      const result = comparator(arrayA[i] as T, arrayB[i++] as T);
      if (result) {
        return result;
      }
    }

    return aLength - bLength;
  };
};
