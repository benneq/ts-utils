import { Predicate } from "@benneq/predicate";

/**
 * Only emits elements from the provided Iterable that match the given Predicate
 *
 * @example
 * filter(x => isEven(x))([1,2,3,4]) => [2,4]
 *
 * @param predicate
 * @returns a Generator that only emits values for which the given Predicate returns `true`
 */
export const filter = <T>(predicate: Predicate<[T]>) =>
  function* (iterable: Iterable<T>): Iterable<T> {
    for (const value of iterable) {
      if (predicate(value)) {
        yield value;
      }
    }
  };
