import { Nullish, isNullish } from "@benneq/object";
import { predicateComparator } from "./predicateComparator";
import { Comparator } from "./_types";

/**
 *
 * @example
 * nullishFirst(numberComparator)(null, 1) => -1
 * nullishFirst(numberComparator)(undefined, -1) => -1
 * nullishFirst(numberComparator)(2, null) => 1
 * nullishFirst(numberComparator)(null, undeinfed) => 0
 *
 * @param comparator
 * @returns
 */
export const nullishFirst = <T>(
  comparator: Comparator<T>
): Comparator<T | Nullish> => {
  return predicateComparator(comparator, isNullish);
};
