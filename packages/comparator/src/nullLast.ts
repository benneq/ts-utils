import { isNull } from "@benneq/object";
import { predicateComparator } from "./predicateComparator";
import { Comparator } from "./_types";

/**
 *
 * @example
 * nullLast(numberComparator)(null, 1) => 1
 * nullLast(numberComparator)(0, -1) => 1
 * nullLast(numberComparator)(-1, null) => -1
 * nullLast(numberComparator)(null, null) => 0
 *
 * @param comparator
 * @returns a {@link Comparator}
 */
export const nullLast = <T>(
  comparator: Comparator<T>
): Comparator<T | null> => {
  return predicateComparator(comparator, isNull, false);
};
