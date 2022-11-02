import { isUndefined } from "@benneq/object";
import { predicateComparator } from "./predicateComparator";
import { Comparator } from "./_types";

/**
 *
 * @example
 * undefinedLast(numberComparator)(undefined, 1) => 1
 * undefinedLast(numberComparator)(0, -1) => 1
 * undefinedLast(numberComparator)(-1, undefined) => -1
 * undefinedLast(numberComparator)(undefined, undefined) => 0
 *
 * @param comparator
 * @returns
 */
export const undefinedLast = <T>(
  comparator: Comparator<T>
): Comparator<T | undefined> => {
  return predicateComparator(comparator, isUndefined, false);
};
