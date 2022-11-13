import { Falsy, isFalsy } from "@benneq/object";
import { predicateComparator } from "./predicateComparator";
import { Comparator } from "./_types";

/**
 *
 * @example
 * Sort an array with {@link @benneq/object!Falsy} values first
 * ```ts
 * const array = ["b", 0, "a"];
 * array.sort(falsyFirst(stringComparator));
 * console.log(array); // [0, "a", "b"]
 * ```
 *
 * @typeParam T - the {@link Comparator} value type
 * @param comparator
 * @returns a {@link Comparator}
 */
export const falsyFirst = <T>(
  comparator: Comparator<T>
): Comparator<T | Falsy> => {
  return predicateComparator(comparator, isFalsy);
};
