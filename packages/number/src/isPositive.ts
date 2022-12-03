import { Predicate } from "@benneq/predicate";

/**
 * Checks if a {@link Number} is positive.
 *
 * @example
 * Returns `true` if number is `> 0`
 * ```ts
 * const result = isPositive(1);
 *
 * console.log(result); // true
 * ```
 *
 * @param num - the {@link Number} to check
 * @returns `true` if the {@link Number} is greater than `0`, otherwise `false`
 */
export const isPositive: Predicate<[number]> = (num) => {
  return num > 0;
};
