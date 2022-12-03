import { isFalsy } from "@benneq/object";
import { predicateComparator } from "./predicateComparator";

/**
 *
 * @example
 * Sort an array with {@link @benneq/object!Falsy} values last
 * ```ts
 * const array = ["b", 0, "a"];
 * array.sort(falsyLast(stringComparator));
 * console.log(array); // ["a", "b", 0]
 * ```
 *
 * @typeParam T - the {@link Comparator} value type
 * @param comparator
 * @returns a {@link Comparator}
 */
export const falsyLast = predicateComparator(isFalsy, false);
