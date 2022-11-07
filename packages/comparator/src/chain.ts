import { Comparator } from "./_types";

/**
 * Executes {@link Comparator}s in order and returns the first non-zero result.
 *
 * @example
 * Sort objects first by age and then by name
 * ```ts
 * const personComparator = chain<Person>(
 *   comparing(p => p.age, numberComparator),
 *   comparing(p => p.name, stringComparator)
 * );
 *
 * const array: Person[] = [
 *   { age: 1, name: "B" },
 *   { age: 1, name: "A" }
 * ];
 *
 * array.sort(personComparator);
 * console.log(array); // [{age:1, name:"A"}, {age:1, name:"B"}]
 * ```
 *
 * @param comparators - the {@link Comparator}s to chain
 *
 * @returns the result of the first {@link Comparator} that is not `0`, or else `0`
 */
export const chain = <T>(...comparators: Comparator<T>[]): Comparator<T> => {
  return (valueA, valueB) => {
    for (const comparator of comparators) {
      const result = comparator(valueA, valueB);
      if (result) {
        return result;
      }
    }
    return 0;
  };
};
