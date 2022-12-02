import {
  clear,
  deleteAt,
  findIndex,
  insertAt,
  findAndDelete,
} from "@benneq/array";
import { Comparator, entryKeyComparator } from "@benneq/comparator";
import { distinct, every } from "@benneq/iterable";
import { Entry } from "@benneq/object";
import { AbstractMap } from "./abstractMap";
import { SortedSet } from "./sortedSet";

export class SortedMap<K, V> extends AbstractMap<K, V> {
  readonly #comparator;
  readonly #value;

  constructor(comparator: Comparator<K>, entries?: Iterable<Entry<K, V>>) {
    super();
    this.#comparator = comparator;
    this.#value = entries
      ? [...distinct<Entry<K, V>>((entry) => entry[0])(entries)].sort(
          entryKeyComparator(comparator)
        )
      : [];
  }

  clear(): void {
    clear(this.#value);
  }

  delete(key: K): boolean {
    return findAndDelete<Entry<K, V>>(
      (entry) => !this.#comparator(key, entry[0])
    )(this.#value);
  }

  deleteAll(keys: SortedSet<K>) {
    const iterator = keys[Symbol.iterator]();

    const values = this.#value;
    let i = 0;
    let next = iterator.next();
    let modified = false;
    while (i < values.length && !next.done) {
      const comparisonResult = this.#comparator(
        next.value,
        (values[i] as [K, V])[0]
      );

      if (comparisonResult <= 0) {
        if (!comparisonResult) {
          modified = deleteAt(i)(values);
        }

        next = iterator.next();
      } else {
        i++;
      }
    }

    return modified;
  }

  deleteAt(index: number, deleteCount?: number): boolean {
    return deleteAt(index, deleteCount)(this.#value);
  }

  at(index: number): [K, V] | undefined {
    return this.#value.at(index);
  }

  get(key: K): V | undefined {
    return this.#value.find((value) => !this.#comparator(value[0], key))?.[1];
  }

  indexOf(key: K, fromIndex?: number): number {
    return findIndex<Entry<K, V>>(
      (entry) => !this.#comparator(key, entry[0]),
      fromIndex
    )(this.#value);
  }

  has(key: K, fromIndex?: number): boolean {
    return this.indexOf(key, fromIndex) >= 0;
  }

  hasAll(keys: SortedSet<K>): boolean {
    let fromIndex: number | undefined;
    return every((key: K) => {
      fromIndex = this.indexOf(key, fromIndex);
      return fromIndex >= 0;
    })(keys);
  }

  set(key: K, value: V): this {
    let i = 0;

    for (const entry of this) {
      const comparisonResult = this.#comparator(key, entry[0]);

      if (!comparisonResult) {
        entry[1] = value;
        return this;
      } else if (comparisonResult < 0) {
        insertAt(i, [key, value])(this.#value);
        return this;
      }

      i++;
    }

    this.#value.push([key, value]);

    return this;
  }

  setAll(entries: SortedMap<K, V>): this {
    const iterator = entries[Symbol.iterator]();

    let i = 0;
    let next = iterator.next();

    while (i < this.#value.length && !next.done) {
      const [key, value] = next.value;

      const comparisonResult = this.#comparator(
        key,
        (this.#value[i] as Entry<K, V>)[0]
      );

      if (!comparisonResult) {
        (this.#value[i] as Entry<K, V>)[1] = value;
        next = iterator.next();
      } else if (comparisonResult < 0) {
        insertAt(i, [key, value])(this.#value);
        next = iterator.next();
      }

      i++;
    }

    while (!next.done) {
      this.#value.push(next.value);
      next = iterator.next();
    }

    return this;
  }

  get size(): number {
    return this.#value.length;
  }

  entries(): IterableIterator<[K, V]> {
    return this.#value[Symbol.iterator]();
  }

  [Symbol.toStringTag] = "SortedMap";
}
