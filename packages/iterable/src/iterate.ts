import { Mapper } from "@benneq/function";
import { alwaysTrue, Predicate } from "@benneq/predicate";

/**
 *
 * @example
 * Iterate from 1 to 3
 * ```ts
 * const iterable = iterate(
 *   1,
 *   x => x + 1,
 *   x => x < 3
 * );
 *
 * console.log(iterable); // [1, 2, 3]
 * ```
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
