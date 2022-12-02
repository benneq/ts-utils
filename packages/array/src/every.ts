import { not, Predicate } from "@benneq/predicate";
import { some } from "./some";

/**
 * Creates a function that checks if any element of an {@link Array}
 * matches a {@link Predicate}.
 *
 * Returns `true` if the `array` is empty.
 *
 * @param predicate - the {@link Predicate} to match
 * @param fromIndex - the optional array index to begin with, defaults to `0`
 * @returns `true` if all elements match the `predicate`, otherwise `false`
 */
export const every =
  <T>(predicate: Predicate<[T, number, ArrayLike<T>]>, fromIndex?: number) =>
  (array: ArrayLike<T>) => {
    return !some<T>(not(predicate), fromIndex)(array);
  };
