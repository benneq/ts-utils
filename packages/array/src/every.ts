import { not, Predicate } from "@benneq/predicate";
import { some } from "./some";

/**
 * Creates a {@link Predicate} that checks if all elements of an {@link Array}
 * match a {@link Predicate}.
 *
 * Returns `true` if the `array` is empty.
 *
 * @param predicate - the {@link Predicate} to match
 * @param fromIndex - the optional array index to begin with, defaults to `0`
 * @returns `true` if all elements match the `predicate`, otherwise `false`
 */
export const every = <T>(
  predicate: Predicate<[T, number, ArrayLike<T>]>,
  fromIndex?: number
): Predicate<[ArrayLike<T>]> => {
  return not(some(not(predicate), fromIndex));
};
