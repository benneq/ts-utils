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
 * deleteFirst(array, 2);
 * console.log(array); // [1, 4, 3, 2]
 * ```
 *
 * @typeParam T - the {@link Array} element type
 * @param array
 * @param predicate
 */
export const findAndReplace = <T>(
  array: T[],
  predicate: Predicate<[T]>,
  value: ValueOrProvider<T, [T]>
) => {
  const index = array.findIndex(predicate);
  if (index > -1) {
    array[index] = valueOrProviderResult(value, array[index] as T);
  }
};
