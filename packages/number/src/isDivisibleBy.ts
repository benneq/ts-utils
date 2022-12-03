import { Predicate } from "@benneq/predicate";

/**
 * Creates a {@link Predicate} that checks if a number is divisible by
 * a given `divider`.
 *
 * @example
 * ```ts
 * const isDivisibleBy3 = isDivisibleBy(3);
 *
 * const result = isDivisibleBy3(-6);
 *
 * console.log(result); // true
 * ```
 *
 * @param divider - the divider to use
 * @returns the {@link Predicate}
 */
export const isDivisibleBy =
  (divider: number): Predicate<[number]> =>
  (num) => {
    return !(num % divider);
  };
