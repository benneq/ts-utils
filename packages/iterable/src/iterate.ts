import { Mapper } from "@benneq/function";
import { alwaysTrue, Predicate } from "@benneq/predicate";

export function* iterate<T>(
  seed: T,
  next: Mapper<T, T>,
  hasNext: Predicate<[T]> = alwaysTrue
): Generator<T, void, unknown> {
  yield seed;
  while (hasNext(seed)) {
    seed = next(seed);
    yield seed;
  }
}
