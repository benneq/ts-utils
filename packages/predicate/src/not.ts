import { Predicate } from "./_types";

/**
 * Inverts a {@link Predicate} with a logical `NOT`.
 *
 * The inverted {@link Predicate} returns `true` if the {@link Predicate}
 * returns `false` and vice versa.
 *
 * @example
 * ```ts
 * const isOdd = not(isEven);
 * const result = isOdd(-1);
 * console.log(result); // true
 * ```
 *
 * @example
 * ```ts
 * const isNotEmpty = not(isEmpty);
 * const result = isNotEmpty([]);
 * console.log(result); // false
 * ```
 *
 * @typeParam T - the type of the {@link Predicate}
 * @param predicate - the {@link Predicate} to negate
 * @returns `true` if the {@link Predicate} returns `false`, otherwise `false`
 */
export const not = <T extends unknown[]>(
  predicate: Predicate<T>
): Predicate<T> => {
  return (...args) => !predicate(...args);
};
