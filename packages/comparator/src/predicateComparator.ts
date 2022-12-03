import { Comparator } from "./_types";

/**
 * Compares values first using a {@link @benneq/predicate!Predicate}, and if both values don't
 * match the {@link @benneq/predicate!Predicate} it will fall back to a {@link Comparator}.
 *
 * @example
 * predicateComparator(isNull)(numberComparator)(0, null) => 1
 * predicateComparator(isNull)(numberComparator)(null, -1) => -1
 * predicateComparator(isNull)(numberComparator)(null, null) => 0
 *
 * @typeParam T - the {@link Comparator} value type
 * @typeParam U - the {@link @benneq/predicate!Predicate} value type
 * @param predicate
 * @param trueFirst
 * @returns a {@link Comparator}
 */
export const predicateComparator =
  <U>(predicate: (value: unknown) => value is U, trueFirst = true) =>
  <T>(comparator: Comparator<T>): Comparator<U | T> => {
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
