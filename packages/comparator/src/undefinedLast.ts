import { isUndefined } from "@benneq/object";
import { predicateComparator } from "./predicateComparator";
import { Comparator } from "./_types";

/**
 *
 * @example
 * Sort an array with `undefined` values last
 * ```ts
 * const array = ["b", undefined, "a"];
 * array.sort(undefinedLast(stringComparator));
 * console.log(array); // ["a", "b", undefined]
 * ```
 *
 * @typeParam T - the {@link Comparator} value type
 * @param comparator
 * @returns a {@link Comparator}
 */
export const undefinedLast = <T>(
  comparator: Comparator<T>
): Comparator<T | undefined> => {
  return predicateComparator(comparator, isUndefined, false);
};
