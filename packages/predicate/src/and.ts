import { Predicate } from "./_types";

/**
 * Combines Predicates with a logical AND
 *
 * @example
 * and() => (() => true)
 * and(alwaysTrue, alwaysTrue) => (() => true)
 * and(alwaysTrue, alwaysFalse) => (() => false)
 * and(alwaysFalse, alwaysFalse) => (() => false)
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
