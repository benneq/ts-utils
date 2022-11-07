import { isUndefined } from "@benneq/object";
import { predicateComparator } from "./predicateComparator";
import { Comparator } from "./_types";

/**
 *
 * @example
 * undefinedFirst(numberComparator)(undefined, 1) => -1
 * undefinedFirst(numberComparator)(0, -1) => 1
 * undefinedFirst(numberComparator)(-1, undefined) => 1
 * undefinedFirst(numberComparator)(undefined, undefined) => 0
 *
 * @param comparator
 * @returns a {@link Comparator}
 */
export const undefinedFirst = <T>(
  comparator: Comparator<T>
): Comparator<T | undefined> => {
  return predicateComparator(comparator, isUndefined);
};
