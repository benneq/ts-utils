import { isGreaterThan, Comparator } from "@benneq/comparator";
import { isUndefined } from "@benneq/object";
import { reduce } from "./reduce";

/**
 * Get the minimum element from the provided Iterable using the given Comparator
 *
 * @example
 * Find min number in Array
 * ```ts
 * const findMinNumber = min(numberComparator);
 * const minNumber = findMinNumber([1,2,3]);
 * console.log(minNumber); // 1
 * ```
 *
 * @param comparator - the Comparator to use
 * @returns the minimum element from the provided Iterable, or `undefined` if Iterable is empty
 */
export const min = <T>(
  comparator: Comparator<T>
): ((iterable: Iterable<T>) => T | undefined) => {
  const minValueIsGreater = isGreaterThan(comparator);

  return reduce<T, T | undefined>((minValue, value) => {
    if (isUndefined(minValue) || minValueIsGreater(minValue, value)) {
      return value;
    } else {
      return minValue;
    }
  }, undefined);
};
