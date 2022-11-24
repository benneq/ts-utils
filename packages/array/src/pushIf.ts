import { isFunction } from "@benneq/function";
import { Predicate } from "@benneq/predicate";

/**
 * Pushes elements to an Array if a {@link Predicate} matches.
 *
 * @mutation
 *
 * @example
 * Push `3` if the array contains `2`
 * ```ts
 * const array = [1, 2];
 * pushIf(array, 2, 3);
 * console.log(array); // [1, 2, 3]
 * ```
 *
 * @typeParam T - the {@link Array} element type
 * @param array - the {@link Array} to modify
 * @param predicate - the {@link Predicate} to match
 * @param values - the values to push
 */
export const pushIf = <T>(
  array: T[],
  predicate: T | Predicate<[T]>,
  ...values: T[]
) => {
  if (
    (isFunction(predicate)
      ? array.findIndex(predicate)
      : array.indexOf(predicate)) > -1
  ) {
    array.push(...values);
  }
};
