import { Predicate } from "./_types";

/**
 * Combines {@link Predicate}s with a logical `OR`.
 *
 * The combined {@link Predicate} returns `true` if any of the
 * {@link Predicate}s returns `true`.
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
 * @typeParam T - the type of the {@link Predicate}s
 * @param predicates - the {@link Predicate}s to combine
 * @returns `true` if any of the {@link Predicate}s returned `true`, otherwise `false`
 */
export const or =
  <T extends unknown[]>(...predicates: Predicate<T>[]): Predicate<T> =>
  (...args) => {
    return predicates.some((predicate) => predicate(...args));
  };
