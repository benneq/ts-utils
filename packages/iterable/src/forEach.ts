import { Callback } from "@benneq/function";

/**
 * Calls a Callback for each element of an {@link Iterable}
 *
 * @example
 * Print all elements
 * ```ts
 * const printAll = forEach(x => console.log(x));
 * printAll([1, 2, 3]); // 1, 2, 3
 * ```
 *
 * @typeParam T - the {@link Iterable} value type
 * @param iterable
 */
export const forEach =
  <T>(callback: Callback<[T]>) =>
  (iterable: Iterable<T>): void => {
    for (const e of iterable) {
      callback(e);
    }
  };
