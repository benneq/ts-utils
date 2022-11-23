import { Mapper } from "@benneq/function";
import { Comparator } from "./_types";

/**
 * Creates a {@link Comparator} that maps the values using a
 * {@link @benneq/function!Mapper} before comparing them.
 *
 * @example
 * Sort `Person` objects by age
 * ```ts
 * const numberMappingComparator = mappingComparator(numberComparator);
 * const personByAgeComparator = numberMappingComparator<Person>(p => p.age);
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
 * @typeParam R - the {@link Comparator} value type
 * @typeParam T - the mapped value type
 * @returns a {@link Comparator}
 */
export const mappingComparator =
  <R>(comparator: Comparator<R>) =>
  <T>(mapper: Mapper<T, R>): Comparator<T> => {
    return (valueA, valueB) => comparator(mapper(valueA), mapper(valueB));
  };
