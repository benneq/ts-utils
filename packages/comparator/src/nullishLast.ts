import { Nullish, isNullish } from "@benneq/object";
import { predicateComparator } from "./predicateComparator";
import { Comparator } from "./_types";

/**
 *
 * @example
 * Sort an array with {@link @benneq/object!Nullish} values last
 * ```ts
 * const array = ["b", null, "a"];
 * array.sort(nullishLast(stringComparator));
 * console.log(array); // ["a", "b", null]
 * ```
 *
 * @typeParam T - the {@link Comparator} value type
 * @param comparator
 * @returns a {@link Comparator}
 */
export const nullishLast = <T>(
  comparator: Comparator<T>
): Comparator<T | Nullish> => {
  return predicateComparator(comparator, isNullish, false);
};
