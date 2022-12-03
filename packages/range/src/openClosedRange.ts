import { Range } from "./range";

export class OpenClosedRange<T> extends Range<T> {
  contains(value: T): boolean {
    return (
      this.comparator(this.from, value) < 0 &&
      this.comparator(value, this.to) <= 0
    );
  }

  override empty = !this.comparator(this.from, this.to);
}
