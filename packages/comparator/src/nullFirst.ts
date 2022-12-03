import { isNull } from "@benneq/object";
import { predicateComparator } from "./predicateComparator";

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
 * @typeParam T - the {@link Comparator} value type
 * @param comparator
 * @returns a {@link Comparator}
 */
export const nullFirst = predicateComparator(isNull);
