import { isFunction } from "@benneq/function";
import { Predicate } from "@benneq/predicate";
import { ValueOrProvider, valueOrProviderResult } from "../../object/dist";

/**
 * Replaces the first element from an Array that matches a {@link Predicate}.
 *
 * @mutation
 *
 * @example
 * Square the first element equal to `2`
 * ```ts
 * const array = [1, 2, 3, 2];
 * findAndReplace(array, 2);
 * console.log(array); // [1, 4, 3, 2]
 * ```
 *
 * @typeParam T - the {@link Array} element type
 * @param array - the {@link Array} to modify
 * @param predicate - the {@link Predicate} to match
 * @param value - the new value
 */
export const findAndReplace = <T>(
  array: T[],
  predicate: T | Predicate<[T]>,
  value: ValueOrProvider<T, [T]>
) => {
  const index = isFunction(predicate)
    ? array.findIndex(predicate)
    : array.indexOf(predicate);
  if (index >= 0) {
    array[index] = valueOrProviderResult(value, array[index] as T);
  }
};
