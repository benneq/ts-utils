import { Predicate } from "./_types";

/**
 * Inverts a Predicate with a logical `NOT`.
 *
 * The combined Predicate returns `true` if the `predicate` returns `false` and vice versa.
 *
 * @example
 * ```ts
 * const isOdd = not(isEven);
 * const b = isOdd(-1);
 * console.log(b); // true
 * ```
 *
 * @example
 * ```ts
 * const isNotEmpty = not(isEmpty);
 * const b = isNotEmpty([]);
 * console.log(b); // false
 * ```
 *
 * @returns `true` if the `predicate` returns `false`, otherwise `false`
 */
export const not = <TArgs extends unknown[]>(
  predicate: Predicate<TArgs>
): Predicate<TArgs> => {
  return (...args) => !predicate(...args);
};
