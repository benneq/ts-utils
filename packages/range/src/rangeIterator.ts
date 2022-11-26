import { Range } from "./range";

export const rangeIterator = <T>(next: (value: T) => T) => {
  return function* (range: Range<T>) {
    let value = range.from;

    do {
      yield value;
      value = next(value);
    } while (range.contains(value));
  };
};
