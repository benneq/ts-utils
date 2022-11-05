import { Comparator } from "./_types";

/**
 * Checks if `valueA` is greater than `valueB`
 *
 * @returns `true` if `valueA` is greater than `valueB`, otherwise `false`
 */
export const isEqualTo =
  <T>(comparator: Comparator<T>) =>
  (valueA: T, valueB: T): boolean => {
    return !comparator(valueA, valueB);
  };
