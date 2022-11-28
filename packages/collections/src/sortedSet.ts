import { clear, deleteAt, insertAt, isSorted } from "@benneq/array";
import { Comparator } from "@benneq/comparator";
import { every } from "@benneq/iterable";
import { pairwise } from "@benneq/iterable/src/pairwise";
import { AbstractSet } from "./abstractSet";

/**
 * A {@link SortedSet} uses a {@link Comparator} for sorting the values and
 * checking for equality.
 *
 * @example
 * Add, delete and iterate
 * ```ts
 * const sortedSet = new SortedSet(numberComparator);
 * sortedSet.add(2);
 *
 * const otherSortedSet = new SortedSet(numberComparator);
 * otherSortedSet.add(2);
 * otherSortedSet.add(3);
 * otherSortedSet.add(1);
 *
 * sortedSet.add(otherSortedSet);
 *
 * sortedSet.delete(1);
 *
 * const result = sortedSet.has(2);
 * console.log(result); // true
 *
 * for(const value of sortedSet) {
 *   console.log(value); // 2, 3
 * }
 * ```
 *
 * @typeParam T - the {@link SortedSet} element type
 */
export class SortedSet<T> extends AbstractSet<T> {
  readonly #comparator;
  readonly #values;

  /**
   * @param comparator - the {@link Comparator} to use for sorting the values
   * @param values - optional {@link Array} of sorted and unique values for initialization
   */
  constructor(comparator: Comparator<T>, values: T[] = []) {
    super();
    if (process.env.NODE_ENV !== "production") {
      console.assert(isSorted(comparator)(values), "values must be sorted");
      console.assert(
        every<[T, T]>(([a, b]) => comparator(a, b) !== 0)(pairwise()(values)),
        "values must be unique"
      );
    }

    this.#comparator = comparator;
    this.#values = values;
  }

  /**
   * Adds `values` to this {@link SortedSet} if it does not already contain equal
   * values. Values are considered equal if the {@link Comparator} returns `0`.
   *
   * @mutation
   *
   * @example
   * Add values
   * ```ts
   * const sortedSet = new SortedSet(numberComparator);
   *
   * sortedSet.add(2);
   * sortedSet.add(0);
   * sortedSet.add(new SortedSet(numberComparator, [1, 2, 3]));
   *
   * console.log([...sortedSet.values()]); // [0, 1, 2, 3]
   * ```
   *
   * @param values - the values to add
   */
  add(value: T): this;
  add(values: SortedSet<T>): this;
  add(value: T | SortedSet<T>): this {
    const values = value instanceof SortedSet ? [...value] : [value];

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
   * @example
   * Remove values
   * ```ts
   * const sortedSet = new SortedSet(numberComparator, [1, 2, 3, 4, 5]);
   *
   * sortedSet.delete(new SortedSet(numberComparator, [0, 1, 2, 5]))
   *
   * console.log([...sortedSet.values()]); // [3, 4]
   * ```
   *
   * @param values - the values to remove
   * @returns always `true`
   */
  delete(value: T): boolean;
  delete(values: SortedSet<T>): boolean;
  delete(value: T | SortedSet<T>): boolean {
    const values = value instanceof SortedSet ? [...value] : [value];

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
   * Returns the value at the specified `index`.
   *
   * @param index - the index of the element to get
   * @returns the element at the specified `index`, or `undefined` if out of bounds
   */
  at(index: number): T | undefined {
    return this.#values.at(index);
  }

  /**
   * Checks if this {@link SortedSet} contains all of the values.
   *
   * @example
   * Does the `set` contain `1` and `2`?
   * ```ts
   * const sortedSet = new SortedSet(numberComparator, [1, 2, 3]);
   * const result = sortedSet.has(new SortedSet(numberComparator, [1, 2]));
   * console.log(result); // true
   * ```
   *
   * @param values - the values it should contain
   * @returns `true` if this {@link SortedSet} contains all of the values, otherwise `false`
   */
  has(value: T): boolean;
  has(values: SortedSet<T>): boolean;
  has(value: T | SortedSet<T>): boolean {
    const values = value instanceof SortedSet ? [...value] : [value];

    let pointer = 0;

    for (const value of this.#values) {
      if (pointer >= values.length) {
        break;
      }

      const comparisonResult = this.#comparator(values[pointer] as T, value);

      if (comparisonResult < 0) {
        return false;
      }

      if (comparisonResult === 0) {
        pointer++;
      }
    }

    return true;
  }

  /**
   * @returns the number of elements in this {@link SortedSet}
   */
  get size(): number {
    return this.#values.length;
  }

  /**
   * @returns an {@link Iterable} of the values of this {@link SortedSet}.
   */
  values(): IterableIterator<T> {
    return this.#values[Symbol.iterator]();
  }

  [Symbol.toStringTag] = "SortedSet";
}
