import { Falsy, isFalsy } from "@benneq/object";
import { predicateComparator } from "./predicateComparator";
import { Comparator } from "./_types";

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
 * @param comparator
 * @returns a {@link Comparator}
 */
export const falsyLast = <T>(
  comparator: Comparator<T>
): Comparator<T | Falsy> => {
  return predicateComparator(comparator, isFalsy, false);
};
