import { Mapper } from "@benneq/function";
import { alwaysTrue, Predicate } from "@benneq/predicate";

/**
 *
 * @typeParam T - the {@link Iterable} value type
 * @param seed
 * @param next
 * @param hasNext
 */
export function* iterate<T>(
  seed: T,
  next: Mapper<T, T>,
  hasNext: Predicate<[T]> = alwaysTrue
): Iterable<T> {
  yield seed;
  while (hasNext(seed)) {
    seed = next(seed);
    yield seed;
  }
}
