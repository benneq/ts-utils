import { Predicate } from "@benneq/predicate";
import { ValueOrProvider, valueOrProviderResult } from "../../object/dist";
import { findIndex } from "./findIndex";

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
export const findAndReplace =
  <T>(
    predicate: Predicate<[T]>,
    value: ValueOrProvider<T, [T]>,
    fromIndex?: number
  ) =>
  (array: T[]): void => {
    const index = findIndex<T>(predicate, fromIndex)(array);

    if (index >= 0) {
      array[index] = valueOrProviderResult(value, array[index] as T);
    }
  };
