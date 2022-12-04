import { ValueOrProvider, valueOrProviderResult } from "../../object/dist";
import { findAndThen } from "./findAndThen";

/**
 * Replaces the first element from an Array that matches a {@link Predicate}.
 *
 * @mutation
 *
 * @example
 * Square the first element equal to `2`
 * ```ts
 * const array = [1, 2, 3, 2];
 *
 * findAndReplace(2)(array);
 *
 * console.log(array); // [1, 4, 3, 2]
 * ```
 *
 * @typeParam T - the {@link Array} element type
 * @param array - the {@link Array} to modify
 * @param predicate - the {@link Predicate} to match
 * @param value - the new value
 */
export const findAndReplace = <T>(value: ValueOrProvider<T, [T]>) =>
  findAndThen<T, void>(
    (v, index, array) => (array[index] = valueOrProviderResult(value, v))
  );
