import { Predicate } from "@benneq/predicate";
import { filter as iterableFilter } from "@benneq/iterable";

/**
 *
 * @example
 * Filtering a Set
 * ```
 * const set = new Set([1,2,3]);
 * const filteredSet = filter(isEven)(set);
 * console.log(filteredSet); // Set([2])
 * ```
 *
 * @param set
 * @returns
 */
export const filter =
  <T>(predicate: Predicate<[T]>) =>
  (set: Set<T>): Set<T> => {
    return new Set<T>(iterableFilter(predicate)(set));
  };
