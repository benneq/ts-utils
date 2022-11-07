import { Comparator } from "./_types";

/**
 *
 * @example
 * reverse(numberComparator)(1, 2) => 1
 * reverse(numberComparator)(1, -1) => -1
 * reverse(numberComparator)(1, 1) => 0
 *
 * @param comparator
 * @returns the reversed {@link Comparator}
 */
export const reverse = <T>(comparator: Comparator<T>): Comparator<T> => {
  return (valueA: T, valueB: T) => comparator(valueA, valueB) * -1;
};
