import { clear, deleteAt, insertAt } from "@benneq/array";
import { Comparator, entryKeyComparator } from "@benneq/comparator";
import { distinct, map } from "@benneq/iterable";
import { Entry } from "@benneq/object";
import { SortedSet } from "./sortedSet";

const valueToSortedSet = <T>(value: SortedSet<T> | T): Iterable<T> => {
  return value instanceof SortedSet ? value : [value];
};

export class SortedMap<K, V> implements Map<K, V> {
  readonly #comparator;
  readonly #value;

  constructor(comparator: Comparator<K>, entries?: Iterable<Entry<K, V>>) {
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

  delete(value: K): boolean;
  delete(values: SortedSet<K>): boolean;
  delete(value: K | SortedSet<K>): boolean {
    const iterator = valueToSortedSet(value)[Symbol.iterator]();

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

  forEach(callbackfn: (value: V, key: K, sortedMap: this) => void): void {
    for (const [key, value] of this) {
      callbackfn(value, key, this);
    }
  }

  get(key: K): V | undefined {
    return this.#value.find((value) => !this.#comparator(value[0], key))?.[1];
  }

  has(value: K): boolean;
  has(values: SortedSet<K>): boolean;
  has(value: K | SortedSet<K>): boolean {
    const iterator = valueToSortedSet(value)[Symbol.iterator]();

    let next = iterator.next();
    for (const [entryKey] of this) {
      if (next.done) {
        break;
      }

      const comparisonResult = this.#comparator(next.value, entryKey);

      if (comparisonResult < 0) {
        return false;
      }

      if (!comparisonResult) {
        next = iterator.next();
      }
    }

    return true;
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

  get size(): number {
    return this.#value.length;
  }

  entries(): IterableIterator<[K, V]> {
    return this.#value[Symbol.iterator]();
  }

  keys(): IterableIterator<K> {
    return map<[K, V], K>((entry) => entry[0])(this);
  }

  values(): IterableIterator<V> {
    return map<[K, V], V>((entry) => entry[1])(this);
  }

  [Symbol.iterator](): IterableIterator<[K, V]> {
    return this.entries();
  }

  [Symbol.toStringTag] = "SortedMap";
}
