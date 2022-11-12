import { Predicate } from "@benneq/predicate";

/**
 * Find the first matching element of an {@link Iterable}, or a default value
 * if the {@link Iterable} is empty.
 *
 * @example
 * findFirst(v => v === 2)([]) => undefined
 * findFirst(v => v === 2)([1,2,3]) => 2
 *
 * @typeParam T - the {@link Iterable} value type
 * @param defaultValue
 * @returns the first matching element of the {@link Iterable}, or the given defaultValue
 */
export const findFirst: {
  <T>(predicate: Predicate<[T]>): (iterable: Iterable<T>) => T | undefined;
  <T>(predicate: Predicate<[T]>, defaultValue: T): (iterable: Iterable<T>) => T;
} =
  <T>(predicate: Predicate<[T]>, defaultValue?: T) =>
  (iterable: Iterable<T>): T | undefined => {
    for (const value of iterable) {
      if (predicate(value)) {
        return value;
      }
    }
    return defaultValue;
  };
