import { isUndefined } from "@benneq/object";
import { predicateComparator } from "./predicateComparator";

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
export const undefinedFirst = predicateComparator(isUndefined);
