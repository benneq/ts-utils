import { Predicate } from "@benneq/predicate";
import { findIndex } from "./findIndex";

/**
 * Creates a function that checks if any element of an {@link Array}
 * matches a {@link Predicate}.
 *
 * Returns `false` if the `array` is empty.
 *
 * @param predicate - the {@link Predicate} to match
 * @param fromIndex - the optional array index to begin with, defaults to `0`
 * @returns `true` if any element matches the `predicate`, otherwise `false`
 */
export const some =
  <T>(predicate: Predicate<[T, number, ArrayLike<T>]>, fromIndex?: number) =>
  (array: ArrayLike<T>) => {
    return findIndex(predicate, fromIndex)(array) >= 0;
  };
