import { Predicate } from "@benneq/predicate";
import { findIndex } from "./findIndex";

type FindAndThen = {
  <T, R>(thenCallback: (value: T, index: number, array: T[]) => R): (
    predicate: Predicate<[T, number, ArrayLike<T>]>,
    fromIndex?: number
  ) => (array: T[]) => R | undefined;
  <T, R>(
    thenCallback: (value: T, index: number, array: T[]) => R,
    defaultValue: R
  ): (
    predicate: Predicate<[T, number, ArrayLike<T>]>,
    fromIndex?: number
  ) => (array: T[]) => R;
};

/**
 * Calls a callback function for the first element of an {@link Array} that
 * matches a {@link Predicate}.
 *
 * Returns `undefined` if no match was found and no `defaultValue` was provided.
 *
 * @param thenCallback
 * @param defaultValue - the optional default value to return
 * @returns the return value of the callback if the {@link Predicate} did match, otherwise the `defaultValue`
 */
export const findAndThen: FindAndThen =
  <T, R>(
    thenCallback: (value: T, index: number, array: T[]) => R,
    defaultValue?: R
  ) =>
  (predicate: Predicate<[T, number, ArrayLike<T>]>, fromIndex?: number) =>
  (array: T[], i = findIndex(predicate, fromIndex)(array)): R | undefined => {
    return i < 0 ? defaultValue : thenCallback(array[i] as T, i, array);
  };
