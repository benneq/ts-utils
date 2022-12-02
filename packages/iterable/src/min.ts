import { isGreaterThan, Comparator } from "@benneq/comparator";
import { isUndefined } from "@benneq/object";
import { reduce } from "./reduce";

/**
 * Get the minimum element from an {@link Iterable} by comparing its elements
 * using a {@link Comparator}.
 *
 * @example
 * Find min number in Array
 * ```ts
 * const findMinNumber = min(numberComparator);
 * const minNumber = findMinNumber([1,2,3]);
 * console.log(minNumber); // 1
 * ```
 *
 * @typeParam T - the {@link Iterable} value type
 * @param comparator - the {@link Comparator} to use
 * @returns the minimum element, or `undefined` if the {@link Iterable} is empty
 */
export const min = <T>(
  comparator: Comparator<T>,
  minValueIsGreater = isGreaterThan(comparator)
): ((iterable: Iterable<T>) => T | undefined) => {
  return reduce<T, T | undefined>((minValue, value) => {
    if (isUndefined(minValue) || minValueIsGreater(minValue, value)) {
      return value;
    } else {
      return minValue;
    }
  }, undefined);
};
