import { identity, Mapper } from "@benneq/function";

/**
 * Only emit values of an {@link Iterable} that have not been emitted yet.
 *
 * The values are by defauled compared by identity (`===`). An optional
 * {@link Mapper} function can be used to map the values to a different
 * representation for the comparison.
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
 * @see {@link filter} for similar operations.
 *
 * @typeParam T - the {@link Iterable} value type
 * @param keyMapper - a {@link Function} that maps an element into a key
 * @returns an {@link Iterable} containing only unique values
 */
type Distinct = <T>(
  keyMapper?: Mapper<T, unknown>
) => (iterable: Iterable<T>) => IterableIterator<T>;

export const distinct: Distinct = (keyMapper = identity) =>
  function* (
    iterable,
    // internal variables:
    seen = new Set<unknown>(),
    key: unknown = undefined
  ) {
    for (const value of iterable) {
      key = keyMapper(value);

      if (!seen.has(key)) {
        seen.add(key);
        yield value;
      }
    }
  };
