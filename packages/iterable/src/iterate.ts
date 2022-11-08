import { Mapper } from "@benneq/function";
import { alwaysTrue, Predicate } from "@benneq/predicate";

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
