import { map } from "@benneq/iterable";

export abstract class AbstractSet<T> implements Set<T> {
  abstract add(value: T): this;

  abstract clear(): void;

  abstract delete(value: T): boolean;

  /**
   * Executes a callback function once for every element in this
   * {@link IndexedSet}.
   *
   * @param callbackfn - the callback function to run
   */
  forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void): void {
    for (const value of this) {
      callbackfn(value, value, this);
    }
  }

  abstract has(value: T): boolean;

  abstract size: number;

  /**
   * @returns an {@link Iterable} of `[value, value]` entries.
   */
  entries(): IterableIterator<[T, T]> {
    return map<T, [T, T]>((value) => [value, value])(this);
  }

  /**
   * @returns an {@link Iterable} of the values of this {@link IndexedSet}.
   */
  keys(): IterableIterator<T> {
    return this.values();
  }

  /**
   * @returns an {@link Iterable} of the values of this {@link IndexedSet}.
   */
  abstract values(): IterableIterator<T>;

  [Symbol.iterator](): IterableIterator<T> {
    return this.values();
  }

  abstract [Symbol.toStringTag]: string;
}
