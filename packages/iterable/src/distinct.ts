import { identity, Mapper } from "@benneq/function";

/**
 *
 * @example
 * Distinct by value
 * ```ts
 * const distinctByValue = distinct();
 * const distinctValues = distinctByValue([1,2,1,3]);
 * console.log(distinctValues); // [1,2,3]
 * ```
 *
 * @example
 * Distinct by `keyMapper` {@link Function}
 * ```ts
 * const distinctByValue = distinct(x => x % 2 === 0);
 * const distinctValues = distinctByValue([1,2,1,3]);
 * console.log(distinctValues); // [1,2]
 * ```
 *
 * @typeParam T - the {@link Iterable} value type
 * @param keyMapper - a {@link Function} that maps an element into a key
 * @returns an {@link Iterable} containing only unique values
 */
export const distinct = <T>(keyMapper: Mapper<T, unknown> = identity) =>
  function* (iterable: Iterable<T>): Iterable<T> {
    const seen = new Set();

    for (const value of iterable) {
      const key = keyMapper(value);

      if (!seen.has(key)) {
        seen.add(key);
        yield value;
      }
    }
  };
