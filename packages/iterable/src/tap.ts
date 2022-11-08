import { Callback } from "@benneq/function";

/**
 * Calls the given Callback for each element of the provided Iterable
 *
 * @example
 * tap(x => console.log(x))([1,2,3]);
 *
 * @param iterable
 * @returns Void
 */
export const tap = <T>(
  callback: Callback<[T]>
): ((iterable: Iterable<T>) => Iterable<T>) => {
  return function* (iterable) {
    for (const e of iterable) {
      callback(e);
      yield e;
    }
  };
};
