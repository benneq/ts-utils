import { Mapper } from "@benneq/function";
import { reduce } from "./reduce";

/**
 * Creates a {@link Function} that groups all elements of an {@link Iterable}
 * by using a {@link Mapper} function and returns a {@link Map} containing the
 * grouped values for each mapped key.
 *
 * @example
 * ```ts
 * const groupByEvenOdd = groupBy(x => x % 2 === 0);
 * const result = groupByEvenOdd([1,2,1,3]);
 * console.log(result); // Map([[1, [1,1,3]], [0, [2]]])
 * ```
 *
 * @typeParam T - the {@link Iterable} value type
 * @typeParam K - the {@link Map} key type
 * @param mapper - the key {@link Mapper} function
 * @returns a {@link Map} containing the grouped values
 */
export const groupBy = <T, K>(
  mapper: Mapper<T, K>
): ((iterable: Iterable<T>) => Map<K, T[]>) => {
  return reduce(
    (acc, value, key = mapper(value), values = acc.get(key) ?? []) => {
      values.push(value);
      return acc.set(key, values);
    },
    new Map<K, T[]>()
  );
};
