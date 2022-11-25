import { isArray, isSorted } from "@benneq/array";
import { Comparator } from "@benneq/comparator";
import { isFunction } from "@benneq/function";
import { isObject } from "@benneq/object";
import { SortedSet } from "./_types";

/**
 * Checks if a `value` is a {@link SortedSet}
 *
 * @example
 * ```ts
 * const value = sortedSet(numberComparator);
 * const result = isSortedSet(value);
 * console.log(result); // true
 * ```
 *
 * @typeParam T - the {@link SortedSet} element type
 * @param value - the value to check
 * @returns `true` if `value` is a {@link SortedSet}, otherwise `false`
 */
export const isSortedSet = <T>(value: unknown): value is SortedSet<T> => {
  return (
    isObject(value) &&
    "comparator" in value &&
    isFunction<Comparator<T>>(value["comparator"]) &&
    "values" in value &&
    isArray<T>(value["values"]) &&
    isSorted(value["comparator"])(value["values"])
  );
};
