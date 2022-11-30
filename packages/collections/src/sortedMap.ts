import { clear, deleteAt, insertAt } from "@benneq/array";
import { Comparator, entryKeyComparator } from "@benneq/comparator";
import { distinct } from "@benneq/iterable";
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
    const index = this.#value.findIndex(
      (entry) => !this.#comparator(key, entry[0])
    );
    if (index >= 0) {
      return deleteAt(this.#value, index);
    }
    return false;
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
          modified = deleteAt(values, i);
        }

        next = iterator.next();
      } else {
        i++;
      }
    }

    return modified;
  }

  at(index: number): [K, V] | undefined {
    return this.#value.at(index);
  }

  get(key: K): V | undefined {
    return this.#value.find((value) => !this.#comparator(value[0], key))?.[1];
  }

  has(key: K): boolean {
    return this.#value.some((entry) => !this.#comparator(key, entry[0]));
  }

  hasAll(keys: SortedSet<K>): boolean {
    const it = keys[Symbol.iterator]();

    let next = it.next();

    for (const [key] of this) {
      if (next.done) {
        break;
      }

      const comparisonResult = this.#comparator(next.value, key);

      if (comparisonResult < 0) {
        return false;
      }

      if (!comparisonResult) {
        next = it.next();
      }
    }

    return !!next.done;
  }

  set(key: K, value: V): this {
    let i = 0;

    for (const entry of this) {
      const comparisonResult = this.#comparator(key, entry[0]);

      if (comparisonResult === 0) {
        entry[1] = value;
        return this;
      }

      if (comparisonResult < 0) {
        insertAt(this.#value, i, [key, value]);
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

      if (comparisonResult === 0) {
        (this.#value[i] as Entry<K, V>)[1] = value;
        next = iterator.next();
      }

      if (comparisonResult < 0) {
        insertAt(this.#value, i, [key, value]);
        next = iterator.next();
      }

      i++;
    }

    while (!next.done) {
      const [key, value] = next.value;
      this.#value.push([key, value]);
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
