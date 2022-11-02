import { Comparator } from "./_types";

/**
 * Executes the provided Comparators in given order and returns the first non-zero result
 *
 * @example
 * chain()
 *
 * @param comparators
 * @returns the result of the first Comparator that is not `0`, or else `0`
 */
export const chain = <T>(...comparators: Comparator<T>[]): Comparator<T> => {
  return (valueA, valueB) => {
    for (const comparator of comparators) {
      const result = comparator(valueA, valueB);
      if (result !== 0) {
        return result;
      }
    }
    return 0;
  };
};
