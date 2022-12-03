import { Predicate } from "@benneq/predicate";

/**
 * Checks if a {@link Number} is negative
 *
 * @example
 * Returns `true` if number is `< 0`
 * ```ts
 * const result = isNegative(-1);
 *
 * console.log(result); // true
 * ```
 *
 * @param num - the {@link Number} to check
 * @returns `true` if the {@link Number} is less than `0`, otherwise `false`
 */
export const isNegative: Predicate<[number]> = (num) => {
  return num < 0;
};
