import { Predicate } from "@benneq/predicate";

/**
 * Find the first matching element of an {@link Iterable}, or a default value
 * if the {@link Iterable} is empty.
 *
 * Returns `undefined` if the {@link Iterable} is empty and no `defaultValue`
 * was provided.
 *
 * @example
 * Get the first matching element
 * ```ts
 * const findFirstEven = findFirst(x => x % 2 === 0);
 * const result = findFirstEven([1,2,3]);
 * console.log(result); // 2
 * ```
 *
 * @example
 * Get the first matching element or the `defaultValue`
 * ```ts
 * const findFirstEven = findFirst(x => x % 2 === 0, 2);
 * const result = findFirstEven([1]);
 * console.log(result); // 2
 * ```
 *
 * @see {@link filter} and {@link first} for similar operations.
 *
 * @typeParam T - the {@link Iterable} value type
 * @param predicate - the {@link Predicate} to match
 * @param defaultValue
 * @returns the first matching element of the {@link Iterable}, or the given `defaultValue`
 */
export const find: {
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
