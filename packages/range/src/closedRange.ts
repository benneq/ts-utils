import { Range } from "./range";

export class ClosedRange<T> extends Range<T> {
  contains(value: T): boolean {
    return (
      this.comparator(this.from, value) <= 0 &&
      this.comparator(value, this.to) <= 0
    );
  }
}
