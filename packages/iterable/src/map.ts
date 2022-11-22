import { Mapper } from "@benneq/function";

/**
 * Maps every element of an {@link Iterable} using a {@link Mapper} function.
 *
 * @example
 * Square all numbers
 * ```ts
 * const square = map(x => x * x);
 * const result = square([1, 2, 3]);
 * console.log(result); // [1, 4, 9]
 * ```
 *
 * @typeParam T - the source {@link Iterable} value type
 * @typeParam R - the target {@link Iterable} value type
 * @param mapper
 * @returns an {@link Iterable} that emits all mapped elements
 */
export const map = <T, R>(mapper: Mapper<T, R>) =>
  function* (iterable: Iterable<T>): Iterable<R> {
    for (const value of iterable) {
      yield mapper(value);
    }
  };
