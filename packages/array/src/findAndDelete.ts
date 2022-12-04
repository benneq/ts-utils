import { Predicate } from "@benneq/predicate";
import { deleteAt } from "./deleteAt";
import { findAndThen } from "./findAndThen";

/**
 * Removes the first element from an Array that matches a {@link Predicate}.
 *
 * @mutation
 *
 * @example
 * Square the first element equal to `2`
 * ```ts
 * const array = [1, 2, 3, 4];
 * findAndDelete(isEven)(array);
 * console.log(array); // [1, 3]
 * ```
 *
 * @typeParam T - the {@link Array} element type
 * @param predicate - the {@link Predicate} to match
 */
type FindAndDelete = <T>(
  predicate: Predicate<[T, number, ArrayLike<T>]>,
  fromIndex?: number
) => (array: T[]) => boolean;

export const findAndDelete: FindAndDelete = findAndThen(
  (_value, index, array) => deleteAt(index)(array),
  false
);
