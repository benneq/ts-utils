import { Mapper } from "@benneq/function";

/**
 * Generates an {@link Array} with a given length, and calls a {@link Function}
 * for each index to determine it's value.
 *
 * @example
 * ```ts
 * const result = generate(3, (index) => -index);
 *
 * console.log(result); // [-1, -2, -3]
 * ```
 *
 * @typeParam T - the {@link Array} value type
 * @param length - the {@link Array} length
 * @param mapper - the {@link Function} to call for each index
 * @returns the generated {@link Array}
 */
export const generate = <T>(length: number, mapper: Mapper<number, T>): T[] => {
  if (process.env.NODE_ENV !== "production") {
    console.assert(length >= 0);
  }

  return [...Array<T>(length)].map((_value, index) => mapper(index));
};
