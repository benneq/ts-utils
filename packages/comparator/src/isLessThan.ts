import { Comparator } from "./_types";

/**
 * Checks if `valueA` is less than `valueB`
 *
 * @returns `true` if `valueA` is less than `valueB`, otherwise `false`
 */
export const isLessThan =
  <T>(comparator: Comparator<T>) =>
  (valueA: T, valueB: T): boolean => {
    return comparator(valueA, valueB) < 0;
  };
