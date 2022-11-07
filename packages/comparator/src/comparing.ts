import { Mapper } from "@benneq/function";
import { Comparator } from "./_types";

/**
 * Creates a {@link Comparator} using the provided {@link @benneq/function!Mapper}
 *
 * @example
 * Sort objects by age
 * ```ts
 * const comparingNumbers = comparing(numberComparator);
 * const personByAgeComparator = comparingNumbers<Person>(p => p.age);
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
 * @returns a {@link Comparator}
 */
export const comparing =
  <R>(comparator: Comparator<R>) =>
  <T>(mapper: Mapper<T, R>): Comparator<T> => {
    return (valueA, valueB) => comparator(mapper(valueA), mapper(valueB));
  };
