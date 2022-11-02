import { Predicate } from "./_types";

/**
 * Inverts a Predicate with a logical NOT
 *
 * @example
 * not(alwaysTrue) => (() => false)
 * not(alwaysFalse) => (() => true)
 *
 * @returns `true` if the `predicate` returns `false`, otherwise `false`
 */
export const not = <TArgs extends unknown[]>(
  predicate: Predicate<TArgs>
): Predicate<TArgs> => {
  return (...args) => !predicate(...args);
};
