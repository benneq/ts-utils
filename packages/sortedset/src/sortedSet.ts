import { clear, deleteAt, insertAt } from "@benneq/array";
import { Comparator } from "@benneq/comparator";

/**
 * A {@link SortedSet} uses a {@link Comparator} for sorting the values and
 * checking for equality.
 *
 * @example
 * Create an empty {@link SortedSet} for numbers
 * ```ts
 * const sortedNumberSet = new SortedSet(numberComparator);
 * console.log([...sortedNumberSet.values()]); // []
 * ```
 *
 * @typeParam T - the {@link SortedSet} element type
 */
export class SortedSet<T> implements Set<T> {
  readonly #comparator;
  readonly #values: T[] = [];

  /**
   * @param comparator - the {@link Comparator} to use for sorting the values
   */
  constructor(comparator: Comparator<T>) {
    this.#comparator = comparator;
  }

  /**
   * Adds `values` to this {@link SortedSet} if it does not already contain equal
   * values. Values are considered equal if the {@link Comparator} returns `0`.
   *
   * @mutation
   *
   * @remarks
   * The values provided must be a sorted and unique.
   *
   * @example
   * Add values
   * ```ts
   * const sortedNumberSet = new SortedSet(numberComparator);
   *
   * sortedNumberSet.add(2);
   * sortedNumberSet.add(0);
   * sortedNumberSet.add(1, 2, 3);
   *
   * console.log([...sortedNumberSet.values()]); // [0, 1, 2, 3]
   * ```
   *
   * @param values - the values to add
   */
  add(...values: T[]): this {
    let i = 0;
    let pointer = 0;

    while (i < this.#values.length && pointer < values.length) {
      const value = values[pointer] as T;

      const comparisonResult = this.#comparator(value, this.#values[i] as T);

      if (comparisonResult <= 0) {
        if (comparisonResult < 0) {
          insertAt(this.#values, i, value);
        }

        pointer++;
      }

      i++;
    }

    this.#values.push(...values.slice(pointer));
    return this;
  }

  /**
   * Removes all elements from this {@link SortedSet}.
   */
  clear(): void {
    clear(this.#values);
  }

  /**
   * Removes `values` from this {@link SortedSet} if it does contain equal values.
   * Values are considered equal if the {@link Comparator} returns `0`.
   *
   * @mutation
   *
   * @remarks
   * The values provided must be a sorted and unique.
   *
   * @example
   * Remove values
   * ```ts
   * const sortedNumberSet = new SortedSet(numberComparator);
   * sortedNumberSet.add(1, 2, 3, 4, 5);
   *
   * sortedNumberSet.delete(0, 1, 2, 5)
   *
   * console.log([...sortedNumberSet.values()]); // [3, 4]
   * ```
   *
   * @param values - the values to remove
   */
  delete(...values: T[]): boolean {
    let i = 0;
    let pointer = 0;

    while (i < this.#values.length && pointer < values.length) {
      const comparisonResult = this.#comparator(
        values[pointer] as T,
        this.#values[i] as T
      );

      if (comparisonResult <= 0) {
        if (comparisonResult === 0) {
          deleteAt(this.#values, i);
        }

        pointer++;
      } else {
        i++;
      }
    }

    return true;
  }

  /**
   * Executes a callback function once for every element in this
   * {@link SortedSet}, in sorted order according to the {@link Comparator}.
   *
   * @param callbackfn - the callback function to run
   */
  forEach(
    callbackfn: (value: T, value2: T, set: Set<T>) => void,
    thisArg?: unknown
  ): void {
    this.#values.forEach((value) => callbackfn(value, value, this), thisArg);
  }

  /**
   * Checks if this {@link SortedSet} contains all of the values.
   *
   * @remarks
   * The values provided must be a sorted and unique.
   *
   * @example
   * Does the `set` contain `2` and `3`?
   * ```ts
   * const set = new SortedSet(numberComparator);
   * set.add(1, 2, 3);
   * const result = set.has(2, 3);
   * console.log(result); // true
   * ```
   *
   * @param values - the values it should contain
   * @returns `true` if this {@link SortedSet} contains all of the values, otherwise `false`
   */
  has(...values: T[]): boolean {
    let i = 0;
    let pointer = 0;

    while (i < this.#values.length && pointer < values.length) {
      const comparisonResult = this.#comparator(
        values[pointer] as T,
        this.#values[i] as T
      );

      if (comparisonResult < 0) {
        return false;
      }

      if (comparisonResult === 0) {
        pointer++;
      }

      i++;
    }

    return true;
  }

  /**
   * @returns the number of elements in this {@link Set}
   */
  get size(): number {
    return this.#values.length;
  }

  /**
   * @returns an {@link Iterable} of `[value, value]` entries.
   */
  entries(): IterableIterator<[T, T]> {
    const values = this.#values;
    return (function* () {
      for (const value of values) {
        yield [value, value];
      }
    })();
  }

  /**
   * @returns an {@link Iterable} of the values of this set.
   */
  keys(): IterableIterator<T> {
    return this[Symbol.iterator]();
  }

  /**
   * @returns an {@link Iterable} of the values of this set.
   */
  values(): IterableIterator<T> {
    return this[Symbol.iterator]();
  }

  [Symbol.iterator](): IterableIterator<T> {
    return this.#values[Symbol.iterator]();
  }

  [Symbol.toStringTag] = "SortedSet";
}
