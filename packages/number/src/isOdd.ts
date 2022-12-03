import { not } from "@benneq/predicate";
import { isEven } from "./isEven";

/**
 * A {@link Predicate} that checks if a number is odd.
 *
 * @example
 * ```ts
 * const result = isOdd(-5);
 *
 * console.log(result); // true
 * ```
 */
export const isOdd = not(isEven);
