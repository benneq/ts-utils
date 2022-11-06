import { Mapper } from "@benneq/function";
import { Comparator } from "./_types";

/**
 * Creates a Comparator using the provided Mapper
 *
 * @example
 * comparing(person => person.name, stringComparator)({name: "a"}, {name: ""}) => 1
 *
 * @param mapper
 * @param comparator
 * @returns a Comparator
 */
export const comparing = <T, R>(
  mapper: Mapper<T, R>,
  comparator: Comparator<R>
): Comparator<T> => {
  return (valueA, valueB) => comparator(mapper(valueA), mapper(valueB));
};
