import { Range } from "./range";

export function* rangeIterator<T>(
  range: Range<T>,
  next: (value: T) => T
): IterableIterator<T> {
  let e = range.from;
  yield e;
  e = next(e);
  while (range.comparator(e, range.to) <= 0) {
    yield e;
    e = next(e);
  }
}
