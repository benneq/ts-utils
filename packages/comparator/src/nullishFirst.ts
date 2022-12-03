import { isNullish } from "@benneq/object";
import { predicateComparator } from "./predicateComparator";

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
 * @typeParam T - the {@link Comparator} value type
 * @param comparator
 * @returns a {@link Comparator}
 */
export const nullishFirst = predicateComparator(isNullish);
