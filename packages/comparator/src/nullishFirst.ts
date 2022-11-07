import { Nullish, isNullish } from "@benneq/object";
import { predicateComparator } from "./predicateComparator";
import { Comparator } from "./_types";

/**
 *
 * @example
 * Sort an array with {@link @benneq/object!Nullish} values first
 * ```ts
 * const array = ["b", null, "a"];
 * array.sort(nullishFirst(stringComparator));
 * console.log(array); // [null, "a", "b"]
 * ```
 *
 * @param comparator
 * @returns a {@link Comparator}
 */
export const nullishFirst = <T>(
  comparator: Comparator<T>
): Comparator<T | Nullish> => {
  return predicateComparator(comparator, isNullish);
};
