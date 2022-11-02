import { Falsy, isFalsy } from "@benneq/object";
import { predicateComparator } from "./predicateComparator";
import { Comparator } from "./_types";

/**
 *
 * @example
 * falsyFirst(numberComparator)(null, 1) => -1
 * falsyFirst(numberComparator)(0, -1) => -1
 * falsyFirst(numberComparator)(2, "") => 1
 * falsyFirst(numberComparator)(0, "") => 0
 *
 * @param comparator
 * @returns
 */
export const falsyFirst = <T>(
  comparator: Comparator<T>
): Comparator<T | Falsy> => {
  return predicateComparator(comparator, isFalsy);
};
