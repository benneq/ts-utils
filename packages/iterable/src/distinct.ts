import { identity, Mapper } from "@benneq/function";

/**
 *
 * @example
 * distinct()([1,2,1,3]) => [1,2,3]
 * distinct(x => x % 2)([1,2,3]) => [1,2]
 *
 * @param mapper
 * @returns
 */
export const distinct = <T>(mapper: Mapper<T, unknown> = identity) =>
  function* (iterable: Iterable<T>): Generator<T, void, unknown> {
    const seen = new Set();

    for (const value of iterable) {
      const key = mapper(value);
      if (seen.has(key)) {
        continue;
      }

      seen.add(key);
      yield value;
    }
  };
