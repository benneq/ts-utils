import { Mapper } from "@benneq/function";
import { alwaysTrue, Predicate } from "@benneq/predicate";

/**
 * Creates an {@link Iterable} that emits a sequence of values computed by a
 * {@link Mapper} function, starting with a `seed` value. The sequence ends
 * when the `hasNext` {@link Predicate} returns `false`.
 *
 * @example
 * Iterate from `1` to `3`
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
 * @see {@link generate} for similar operations.
 *
 * @typeParam T - the {@link Iterable} value type
 * @param seed - the first value of the sequence
 * @param next - the {@link Mapper} function to compute the next value
 * @param hasNext - the {@link Predicate} to check if there's a next value
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
