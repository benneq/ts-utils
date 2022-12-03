import { isDivisibleBy } from "./isDivisibleBy";

/**
 * A {@link Predicate} that checks if a number is even.
 *
 * @example
 * ```ts
 * const result = isEven(-6);
 *
 * console.log(result); // true
 * ```
 */
export const isEven = isDivisibleBy(2);
