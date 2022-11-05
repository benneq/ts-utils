import { Comparator } from "./_types";

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
): Comparator<T[]> => {
  return (valueA, valueB) => {
    const length = Math.min(valueA.length, valueB.length);

    for (let i = 0; i < length; i++) {
      const result = comparator(valueA[i] as T, valueB[i] as T);
      if (result !== 0) {
        return result;
      }
    }

    return valueA.length - valueB.length;
  };
};
