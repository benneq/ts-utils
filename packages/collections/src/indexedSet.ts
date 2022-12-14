import { clear, deleteAt, deleteFirst, insertAt, move } from "@benneq/array";
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
   * @param values - optional {@link Iterable} of values for initialization
   */
  constructor(values?: Iterable<T>) {
    super();
    this.#values = [...new Set(values)];
  }

  add(value: T): this {
    if (!this.has(value)) {
      this.#values.push(value);
    }
    return this;
  }

  clear(): void {
    clear(this.#values);
  }

  delete(value: T): boolean {
    return deleteFirst(value)(this.#values);
  }

  /**
   * Deletes the element at the given `index`.
   *
   * @mutation
   *
   * @example
   * Remove value at index 1
   * ```ts
   * const indexedSet = new IndexedSet([1, 2, 3]);
   *
   * indexedSet.deleteAt(1);
   *
   * console.log([...indexedSet.values()]); // [1, 3]
   * ```
   *
   * @param index - the index to delete
   * @returns `true` if the {@link IndexedSet} was modified, otherwise `false`
   */
  deleteAt(index: number, deleteCount?: number): boolean {
    return deleteAt(index, deleteCount)(this.#values);
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
    (sourceIndex < 0 ? insertAt(index, value) : move(sourceIndex, index))(
      this.#values
    );
  }

  has(value: T): boolean {
    return this.#values.includes(value);
  }

  get size(): number {
    return this.#values.length;
  }

  values(): IterableIterator<T> {
    return this.#values[Symbol.iterator]();
  }

  [Symbol.toStringTag] = "IndexedSet";
}
