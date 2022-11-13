import { isUndefined } from "@benneq/object";
import { predicateComparator } from "./predicateComparator";
import { Comparator } from "./_types";

/**
 *
 * @example
 * Sort an array with `undefined` values first
 * ```ts
 * const array = ["b", undefined, "a"];
 * array.sort(undefinedFirst(stringComparator));
 * console.log(array); // [undefined, "a", "b"]
 * ```
 *
 * @typeParam T - the {@link Comparator} value type
 * @param comparator
 * @returns a {@link Comparator}
 */
export const undefinedFirst = <T>(
  comparator: Comparator<T>
): Comparator<T | undefined> => {
  return predicateComparator(comparator, isUndefined);
};
