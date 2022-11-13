import { Comparator } from "../../comparator/src/_types";

/**
 * Creates a {@link Comparator} that compares the elements of two
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
 * @typeParam T - the {@link Comparator} value type
 * @param comparator - the {@link Comparator} to use for the elements
 * @returns a {@link Comparator} for {@link Array}s of type `T`
 */
export const arrayComparator = <T>(
  comparator: Comparator<T>
): Comparator<ArrayLike<T>> => {
  return (arrayA, arrayB) => {
    const length = Math.min(arrayA.length, arrayB.length);

    for (let i = 0; i < length; i++) {
      const result = comparator(arrayA[i] as T, arrayB[i] as T);
      if (result) {
        return result;
      }
    }

    return arrayA.length - arrayB.length;
  };
};
