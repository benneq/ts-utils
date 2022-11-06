import { isLessThan, Comparator } from "@benneq/comparator";
import { isUndefined } from "@benneq/object";
import { reduce } from "./reduce";

/**
 * Get the maximum element from the provided Iterable using the given Comparator
 *
 * @example
 * Find max number in Array
 * ```ts
 * const findMaxNumber = max(numberComparator);
 * const maxNumber = findMaxNumber([1,2,3]);
 * console.log(maxNumber); // 3
 * ```
 *
 * @param comparator - the Comparator to use
 * @returns the maximum element from the provided Iterable, or `undefined` if Iterable is empty
 */
export const max = <T>(
  comparator: Comparator<T>
): ((iterable: Iterable<T>) => T | undefined) => {
  const maxValueIsLess = isLessThan(comparator);

  return reduce<T, T | undefined>((maxValue, value) => {
    if (isUndefined(maxValue) || maxValueIsLess(maxValue, value)) {
      return value;
    } else {
      return maxValue;
    }
  }, undefined);
};
