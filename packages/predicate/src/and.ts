import { Predicate } from "./_types";

/**
 * Combines {@link Predicate}s with a logical `AND`.
 *
 * The combined {@link Predicate} returns `true` if all of the
 * {@link Predicate}s returns `true`.
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
 * @typeParam T - the type of the {@link Predicate}s
 * @param predicates - the {@link Predicate}s to combine
 * @returns `true` if all {@link Predicate}s return `true`, otherwise `false`
 */
export const and =
  <T extends unknown[]>(...predicates: Predicate<T>[]): Predicate<T> =>
  (...args) => {
    return predicates.every((predicate) => predicate(...args));
  };
