import { Predicate } from "@benneq/predicate";

/**
 * Get the first element of the provided Iterable, or the given default value if the Iterable is empty
 *
 * @example
 * findFirst(v => v === 2)([]) => undefined
 * findFirst(v => v === 2)([1,2,3]) => 2
 *
 * @param defaultValue
 * @returns the first element of the provided Iterable, or the given defaultValue
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
