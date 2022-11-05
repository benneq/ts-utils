import { isGreaterThan, Comparator } from "@benneq/comparator";
import { isUndefined } from "@benneq/object";

/**
 * Get the minimum element from the provided Iterable using the given Comparator
 *
 * @example
 * min((a,b) => a-b)([]) => undefined
 * min((a,b) => a-b)([3,1,2]) => 1
 *
 * @param comparator
 * @returns the minimum element from the provided Iterable
 */
export const min = <T>(
  comparator: Comparator<T>
): ((iterable: Iterable<T>) => T | undefined) => {
  const minValueIsGreater = isGreaterThan(comparator);

  return (iterable) => {
    let minValue: T | undefined;
    for (const value of iterable) {
      if (isUndefined(minValue) || minValueIsGreater(minValue, value)) {
        minValue = value;
      }
    }
    return minValue;
  };
};
