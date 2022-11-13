import { Comparator } from "./_types";

/**
 * A {@link Comparator} that reverses the result of another {@link Comparator}.
 *
 * @example
 * Sort numbers in reverse order
 * ```ts
 * const reverseNumberComparator = reverse(numberComparator);
 * const array = [2,3,1];
 * array.sort(reverseNumberComparator);
 * console.log(array); // [3,2,1]
 * ```
 *
 * @typeParam T - the {@link Comparator} value type
 * @param comparator - the {@link Comparator} to reverse
 * @returns the reversed {@link Comparator}
 */
export const reverse = <T>(comparator: Comparator<T>): Comparator<T> => {
  return (valueA: T, valueB: T) => comparator(valueA, valueB) * -1;
};
