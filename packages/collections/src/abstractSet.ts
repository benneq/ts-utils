import { map } from "@benneq/iterable";

/**
 * An abstract helper class that implements the common base functionality of a
 * {@link Set}.
 */
export abstract class AbstractSet<T> implements Set<T> {
  /**
   * @see {@link Set.add}
   */
  abstract add(value: T): this;

  /**
   * @see {@link Set.clear}
   */
  abstract clear(): void;

  /**
   * @see {@link Set.delete}
   */
  abstract delete(value: T): boolean;

  /**
   * @see {@link Set.has}
   */
  abstract has(value: T): boolean;

  /**
   * @see {@link Set.size}
   */
  abstract size: number;

  /**
   * @see {@link Set.values}
   */
  abstract values(): IterableIterator<T>;

  /**
   * @see {@link Set[Symbol.toStringTag]}
   */
  abstract [Symbol.toStringTag]: string;

  /**
   * @see {@link Set.forEach}
   */
  forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void): void {
    for (const value of this) {
      callbackfn(value, value, this);
    }
  }

  /**
   * @see {@link Set.entries}
   */
  entries(): IterableIterator<[T, T]> {
    return map<T, [T, T]>((value) => [value, value])(this);
  }

  /**
   * @see {@link Set.keys}
   */
  keys(): IterableIterator<T> {
    return this.values();
  }

  /**
   * @see {@link Set[Symbol.iterator]}
   */
  [Symbol.iterator](): IterableIterator<T> {
    return this.values();
  }
}
