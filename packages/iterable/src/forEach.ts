import { Callback } from "@benneq/function";

/**
 * Calls a Callback for each element of an {@link Iterable}
 *
 * @example
 * forEach([1,2,3])(x => console.log(x));
 *
 * @typeParam T - the {@link Iterable} value type
 * @param iterable
 */
export const forEach =
  <T>(iterable: Iterable<T>) =>
  (callback: Callback<[T]>): void => {
    for (const e of iterable) {
      callback(e);
    }
  };
