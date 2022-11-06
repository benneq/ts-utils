import { Predicate } from "./_types";

/**
 * Combines Predicates with a logical `AND`.
 *
 * The combined Predicate returns `true` if all of the `predicates` returns `true`.
 *
 * @example
 * Combine two Predicates with a logical `AND`
 * ```
 * const predicate = and(numberIsPositive, numberIsEven);
 * const b = p(2);
 * console.log(b); // true
 * ```
 *
 * @example
 * Returns an {@link alwaysTrue} Predicate if no args provided
 * ```
 * const predicate = and();
 * const b = p();
 * console.log(b); // true
 * ```
 *
 * @returns `true` if all `predicates` return `true`, otherwise `false`
 */
export const and =
  <TArgs extends unknown[]>(
    ...predicates: Predicate<TArgs>[]
  ): Predicate<TArgs> =>
  (...args) => {
    return predicates.every((predicate) => predicate(...args));
  };
