import { Nullish, isNullish } from "@benneq/object";
import { predicateComparator } from "./predicateComparator";
import { Comparator } from "./_types";

/**
 *
 * @example
 * nullishLast(numberComparator)(null, 1) => 1
 * nullishLast(numberComparator)(undefined, -1) => 1
 * nullishLast(numberComparator)(2, null) => -1
 * nullishLast(numberComparator)(null, undefined) => 0
 *
 * @param comparator
 * @returns a {@link Comparator}
 */
export const nullishLast = <T>(
  comparator: Comparator<T>
): Comparator<T | Nullish> => {
  return predicateComparator(comparator, isNullish, false);
};
