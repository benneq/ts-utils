import { isNull } from "@benneq/object";
import { predicateComparator } from "./predicateComparator";

/**
 *
 * @example
 * Sort an array with `null` values last
 * ```ts
 * const array = ["b", null, "a"];
 * array.sort(nullLast(stringComparator));
 * console.log(array); // ["a", "b", null]
 * ```
 *
 * @typeParam T - the {@link Comparator} value type
 * @param comparator
 * @returns a {@link Comparator}
 */
export const nullLast = predicateComparator(isNull, false);
