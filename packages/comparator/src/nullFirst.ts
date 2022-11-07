import { isNull } from "@benneq/object";
import { predicateComparator } from "./predicateComparator";
import { Comparator } from "./_types";

/**
 *
 * @example
 * Sort an array with `null` values first
 * ```ts
 * const array = ["b", null, "a"];
 * array.sort(nullFirst(stringComparator));
 * console.log(array); // [null, "a", "b"]
 * ```
 *
 * @param comparator
 * @returns a {@link Comparator}
 */
export const nullFirst = <T>(
  comparator: Comparator<T>
): Comparator<T | null> => {
  return predicateComparator(comparator, isNull);
};
