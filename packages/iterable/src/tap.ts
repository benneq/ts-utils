import { Callback } from "@benneq/function";

/**
 * Calls a {@link Callback} for each element of an {@link Iterable}.
 *
 * @example
 * Print all elements
 * ```ts
 * const printAll = tap(x => console.log(x));
 * printAll([1, 2, 3]); // 1, 2, 3
 * ```
 *
 * @see {@link forEach} and {@link map} for similar operations
 *
 * @typeParam T - the {@link Iterable} value type
 * @param callback - the {@link Callback} to call
 */
export const tap = <T>(
  callback: Callback<[T]>
): ((iterable: Iterable<T>) => IterableIterator<T>) => {
  return function* (iterable) {
    for (const e of iterable) {
      callback(e);
      yield e;
    }
  };
};
