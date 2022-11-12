import { alwaysTrue } from "@benneq/predicate";
import { findFirst } from "./findFirst";

/**
 * Get the first element of an {@link Iterable}, or a default value if the
 * {@link Iterable} is empty.
 *
 * @example
 * first()([]) => undefined
 * first()([1,2,3]) => 1
 * first(2)([]) => 2
 *
 * @typeParam T - the {@link Iterable} value type
 * @param defaultValue
 * @returns the first element of the {@link Iterable}, or the defaultValue
 */
export const first: {
  <T>(): (iterable: Iterable<T>) => T | undefined;
  <T>(defaultValue: T): (iterable: Iterable<T>) => T;
} = <T>(defaultValue?: T): ((iterable: Iterable<T>) => T | undefined) => {
  return findFirst(alwaysTrue, defaultValue);
};
