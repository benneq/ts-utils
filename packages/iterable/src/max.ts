import { isLessThan, Comparator } from "@benneq/comparator";
import { isUndefined } from "@benneq/object";

/**
 * Get the maximum element from the provided Iterable using the given Comparator
 *
 * @example
 * max((a,b) => a-b)([]) => undefined
 * max((a,b) => a-b)([3,1,2]) => 3
 *
 * @param comparator
 * @returns the maximum element from the provided Iterable
 */
export const max = <T>(
  comparator: Comparator<T>
): ((iterable: Iterable<T>) => T | undefined) => {
  const maxValueIsLess = isLessThan(comparator);

  return (iterable) => {
    let maxValue: T | undefined;
    for (const value of iterable) {
      if (isUndefined(maxValue) || maxValueIsLess(maxValue, value)) {
        maxValue = value;
      }
    }
    return maxValue;
  };
};
