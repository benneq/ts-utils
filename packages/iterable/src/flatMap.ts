import { Mapper } from "@benneq/function";

/**
 * Maps an {@link Iterable} to a flat representation of the mapped
 * {@link Iterable}s.
 *
 * @example
 * ```ts
 * const mapTo = flatMap(x => [1, x]);
 * const result = mapTo([1, 2, 3]);
 * console.log(result); // [1,1,1,2,1,3]
 * ```
 *
 * @typeParam T - the source {@link Iterable} value type
 * @typeParam R - the target {@link Iterable} value type
 * @param mapper
 * @returns an {@link Iterable} that emits all elements of all mapped {@link Iterable}s
 */
export const flatMap = <T, R>(mapper: Mapper<T, Iterable<R>>) =>
  function* (iterable: Iterable<T>): Iterable<R> {
    for (const value of iterable) {
      for (const innerValue of mapper(value)) {
        yield innerValue;
      }
    }
  };
