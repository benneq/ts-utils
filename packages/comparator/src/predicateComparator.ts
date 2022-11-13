import { Comparator } from "./_types";

/**
 * Compares values first using a {@link @benneq/predicate!Predicate}, and if both values don't
 * match the {@link @benneq/predicate!Predicate} it will fall back to a {@link Comparator}.
 *
 * @example
 * predicateComparator(numberComparator, isNull)(0, null) => 1
 * predicateComparator(numberComparator, isNull)(null, -1) => -1
 * predicateComparator(numberComparator, isNull)(null, null) => 0
 *
 * @typeParam T - the {@link Comparator} value type
 * @typeParam U - the {@link @benneq/predicate!Predicate} value type
 * @param comparator
 * @param predicate
 * @param trueFirst
 * @returns a {@link Comparator}
 */
export const predicateComparator = <T, U>(
  comparator: Comparator<T>,
  predicate: (value: T | U) => value is U,
  trueFirst = true
): Comparator<T | U> => {
  return (valueA, valueB) => {
    if (predicate(valueA)) {
      return predicate(valueB) ? 0 : trueFirst ? -1 : 1;
    } else if (predicate(valueB)) {
      return trueFirst ? 1 : -1;
    } else {
      return comparator(valueA, valueB);
    }
  };
};
