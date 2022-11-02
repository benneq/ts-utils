import { isNull } from "@benneq/object";
import { predicateComparator } from "./predicateComparator";
import { Comparator } from "./_types";

/**
 *
 * @example
 * nullFirst(numberComparator)(null, 1) => -1
 * nullFirst(numberComparator)(0, -1) => 1
 * nullFirst(numberComparator)(-1, null) => 1
 * nullFirst(numberComparator)(null, null) => 0
 *
 * @param comparator
 * @returns
 */
export const nullFirst = <T>(
  comparator: Comparator<T>
): Comparator<T | null> => {
  return predicateComparator(comparator, isNull);
};
