import { Mapper } from "@benneq/function";

/**
 * Maps every element of the provided Iterable using the given Mapper
 *
 * @example
 * map(x => x + 1)([1,2,3]) => [2,3,4]
 *
 * @param mapper
 * @returns a Generator that emits all mapped elements from the provided Iterable
 */
export const map = <T, R>(mapper: Mapper<T, R>) =>
  function* (iterable: Iterable<T>): Iterable<R> {
    for (const value of iterable) {
      yield mapper(value);
    }
  };
