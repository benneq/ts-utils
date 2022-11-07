import { Falsy, isFalsy } from "@benneq/object";
import { predicateComparator } from "./predicateComparator";
import { Comparator } from "./_types";

/**
 *
 * @example
 * falsyLast(numberComparator)(null, 1) => 1
 * falsyLast(numberComparator)(0, -1) => 1
 * falsyLast(numberComparator)(2, "") => -1
 * falsyLast(numberComparator)(0, "") => 0
 *
 * @param comparator
 * @returns a {@link Comparator}
 */
export const falsyLast = <T>(
  comparator: Comparator<T>
): Comparator<T | Falsy> => {
  return predicateComparator(comparator, isFalsy, false);
};
