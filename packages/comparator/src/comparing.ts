import { Mapper } from "@benneq/function";
import { Comparator } from "./_types";

/**
 * Creates a {@link Comparator} using the provided Mapper
 *
 * @example
 * Sort objects by age
 * ```ts
 * const personByAgeComparator = comparing(p => p.age, numberComparator);
 *
 * const array: Person[] = [
 *   { age: 2 },
 *   { age: 1 }
 * ];
 *
 * array.sort(personByAgeComparator);
 * console.log(array); // [{age:1}, {age:2}]
 * ```
 *
 * @param mapper
 * @param comparator
 * @returns a {@link Comparator}
 */
export const comparing = <T, R>(
  mapper: Mapper<T, R>,
  comparator: Comparator<R>
): Comparator<T> => {
  return (valueA, valueB) => comparator(mapper(valueA), mapper(valueB));
};
