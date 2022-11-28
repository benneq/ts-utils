import { clear, deleteFirst, insertAt, move } from "@benneq/array";
import { isDistinct } from "@benneq/iterable";
import { AbstractSet } from "./abstractSet";

/**
 * A {@link Set} implementation that provides index-based access.
 *
 * Similar to an {@link Array} that only allows unique elements.
 *
 * @example
 * ```ts
 * const indexedSet = new IndexedSet();
 * indexedSet.add(1);
 * indexedSet.add(3);
 * indexedSet.add(2);
 * indexedSet.add(1);
 *
 * console.log(indexedSet); // 1, 3, 2
 *
 * indexedSet.set(0, 4);
 * console.log(indexedSet); // 4, 1, 3, 2
 *
 * indexedSet.set(3, 1);
 * console.log(indexedSet); // 4, 3, 1, 2
 * ```
 *
 * @typeParam T - the {@link IndexedSet} element type
 */
export class IndexedSet<T> extends AbstractSet<T> {
  readonly #values;

  /**
   * @param values - optional {@link Array} of values for initialization
   */
  constructor(values: T[] = []) {
    super();
    if (process.env.NODE_ENV !== "production") {
      console.assert(isDistinct()(values), "values must be unique");
    }

    this.#values = values;
  }

  /**
   * Adds a `value` to the end of this {@link IndexedSet} if it does not
   * already contain it.
   *
   * @mutation
   *
   * @example
   * Add value
   * ```ts
   * const indexedSet = new IndexedSet();
   *
   * indexedSet.add(2);
   * indexedSet.add(0);
   * indexedSet.add(2);
   *
   * console.log([...indexedSet.values()]); // [2, 0]
   * ```
   *
   * @param value - the value to add
   */
  add(value: T): this {
    if (!this.has(value)) {
      this.#values.push(value);
    }
    return this;
  }

  /**
   * Removes all elements from this {@link IndexedSet}.
   */
  clear(): void {
    clear(this.#values);
  }

  /**
   * Removes a `value` from this {@link IndexedSet} if it does contain it.
   *
   * @mutation
   *
   * @example
   * Remove value
   * ```ts
   * const indexedSet = new IndexedSet([1, 2, 3]);
   *
   * indexedSet.delete(1);
   *
   * console.log([...indexedSet.values()]); // [2, 3]
   * ```
   *
   * @param value - the value to remove
   * @returns `true` if the {@link IndexedSet} was modified, otherwise `false`
   */
  delete(value: T): boolean {
    return deleteFirst(this.#values, value);
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
   * Sets the value at the specified `index`. If the value already exists, it
   * will be moved to the new index, otherwise it will be inserted at the index.
   *
   * @example
   * Set value
   * ```ts
   * const indexedSet = new IndexedSet([1, 2, 3]);
   *
   * indexedSet.set(0, 3);
   *
   * console.log([...indexedSet.values()]); // [3, 1, 2]
   * ```
   *
   * @param index - the index where to set the value
   * @param value - the value to set
   */
  set(index: number, value: T): void {
    const sourceIndex = this.#values.indexOf(value);
    if (sourceIndex < 0) {
      insertAt(this.#values, index, value);
    } else {
      move(this.#values)(sourceIndex, index);
    }
  }

  /**
   * Checks if this {@link IndexedSet} contains the value.
   *
   * @example
   * Does the `set` contain `2`?
   * ```ts
   * const indexedSet = new IndexedSet([1, 2, 3]);
   * const result = indexedSet.has(2));
   * console.log(result); // true
   * ```
   *
   * @param value - the value it should contain
   * @returns `true` if this {@link IndexedSet} contains the value, otherwise `false`
   */
  has(value: T): boolean {
    return this.#values.includes(value);
  }

  /**
   * @returns the number of elements in this {@link IndexedSet}
   */
  get size(): number {
    return this.#values.length;
  }

  /**
   * @returns an {@link Iterable} of the values of this {@link IndexedSet}.
   */
  values(): IterableIterator<T> {
    return this.#values[Symbol.iterator]();
  }

  [Symbol.toStringTag] = "IndexedSet";
}
