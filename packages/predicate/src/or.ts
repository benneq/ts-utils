import { Predicate } from "./_types";

/**
 * Combines Predicates with a logical OR
 *
 * @example
 * or() => (() => true)
 * or(alwaysTrue, alwaysTrue) => (() => true)
 * or(alwaysTrue, alwaysFalse) => (() => true)
 * or(alwaysFalse, alwaysFalse) => (() => false)
 *
 * @returns `true` if any of the `predicates` returned `true`, otherwise `false`
 */
export const or =
  <TArgs extends unknown[]>(
    ...predicates: Predicate<TArgs>[]
  ): Predicate<TArgs> =>
  (...args) => {
    return predicates.some((predicate) => predicate(...args));
  };
