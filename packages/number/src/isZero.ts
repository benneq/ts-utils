import { isFalsy } from "@benneq/object";
import { Predicate } from "@benneq/predicate";

/**
 * A {@link Predicate} that checks if a {@link Number} is zero.
 *
 * @example
 * Returns `true` if number is `=== 0`
 * ```ts
 * const result = isZero(0);
 *
 * console.log(result); // true
 * ```
 */
export const isZero: Predicate<[number]> = isFalsy;
