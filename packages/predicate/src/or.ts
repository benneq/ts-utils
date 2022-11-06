import { Predicate } from "./_types";

/**
 * Combines Predicates with a logical `OR`.
 *
 * The combined Predicate returns `true` if any of the `predicates` returns `true`.
 *
 * @example
 * Combine two Predicates with a logical `OR`
 * ```
 * const predicate = or(numberIsPositive, numberIsEven);
 * const b = p(-2);
 * console.log(b); // true
 * ```
 *
 * @example
 * Returns an {@link alwaysFalse} Predicate if no args provided
 * ```
 * const predicate = or();
 * const b = p();
 * console.log(b); // false
 * ```
 *
 * @typeParam T - the type of the Predicates
 *
 * @param predicates - the Predicates to combine
 *
 * @returns `true` if any of the `predicates` returned `true`, otherwise `false`
 */
export const or =
  <T extends unknown[]>(...predicates: Predicate<T>[]): Predicate<T> =>
  (...args) => {
    return predicates.some((predicate) => predicate(...args));
  };
