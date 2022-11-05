import { Comparator } from "../../comparator/src/_types";

/**
 * Creates a Comparator that compares the elements of two Arrays pairwise
 *
 * Finds the first unequal pair and returns the result
 *
 * If all pairs are equal the Array's `length` will be used for comparison
 *
 * @example
 * arrayComparator(numberComparator)([], []) => 0
 * arrayComparator(numberComparator)([1,2], [1,1]) => 1
 * arrayComparator(numberComparator)([1,1], [2]) => 1
 * arrayComparator(numberComparator)([], [0]) => -1
 *
 * @param comparator
 * @returns a Comparator for Arrays of type `T`
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
