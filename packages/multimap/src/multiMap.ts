import { deleteAt, isEmpty } from "@benneq/array";
import { count, flatMap } from "@benneq/iterable";
import { Entry } from "@benneq/object";

export class MultiMap<K, V> {
  #value;

  constructor(iterable?: Iterable<Entry<K, V>>) {
    this.#value = new Map<K, V[]>();

    if (iterable) {
      for (const [key, value] of iterable) {
        this.add(key, value);
      }
    }
  }

  /**
   * @see {@link Map.clear}
   */
  clear(): void {
    this.#value.clear();
  }

  /**
   * Deletes the first entry with the given `key` and `value`.
   *
   * If this function is being called with a `value`, all values for the `key`
   * get deleted.
   *
   * @see {@link Map.delete}
   *
   * @param key - the key to look for
   * @param value - the optional value
   * @returns `true` if an entry was deleted, otherwise `false`
   */
  delete(key: K, value?: V): boolean {
    if (value) {
      const values = this.#value.get(key);
      if (!values) {
        return false;
      }

      const index = values.indexOf(value);
      if (index < 0) {
        return false;
      }

      deleteAt(values, index);
      if (!isEmpty(values)) {
        return true;
      }
    }

    return this.#value.delete(key);
  }

  /**
   * @see {@link Map.forEach}
   */
  forEach(callbackfn: (value: V, key: K, map: MultiMap<K, V>) => void): void {
    for (const [key, value] of this) {
      callbackfn(value, key, this);
    }
  }

  /**
   * @see {@link Map.get}
   */
  get(key: K): Iterable<V> {
    return this.#value.get(key) || [];
  }

  /**
   * Checks if this {@link MultiMap} contains an entry with the key and value.
   *
   * @see {@link Map.has}
   *
   * @param key - the key to look for
   * @param value - the optional value
   * @returns `true` if an entry with the given key and value exists, otherwise `false`
   */
  has(key: K, value?: V): boolean {
    return (
      this.#value.has(key) &&
      (!value || (this.#value.get(key) as V[]).includes(value))
    );
  }

  /**
   * Set the values for a key and replaces all previous values for this key.
   *
   * @see {@link Map.set}
   *
   * @param key - the key to set
   * @param value - the values to set
   * @returns this {@link MultiMap}
   */
  set(key: K, values: Iterable<V>): this {
    this.#value.set(key, [...values]);
    return this;
  }

  /**
   * Adds a value for a key to this {@link MultiMap}.
   *
   * @param key - the key to look up
   * @param value - the value to add
   * @returns this {@link MultiMap}
   */
  add(key: K, value: V): this {
    const values = (this.#value.has(key) ? this.#value.get(key) : []) as V[];
    values.push(value);
    this.#value.set(key, values);
    return this;
  }

  /**
   * @see {@link Map.size}
   */
  get size(): number {
    return count(this) || 0;
  }

  /**
   * @see {@link Map.entries}
   */
  entries(): IterableIterator<[K, V]> {
    return flatMap<[K, V[]], [K, V]>(([key, values]) =>
      values.map((value) => [key, value])
    )(this.#value);
  }

  /**
   * @see {@link Map.keys}
   */
  keys(): IterableIterator<K> {
    return this.#value.keys();
  }

  /**
   * @see {@link Map.forEach}
   */
  values(): IterableIterator<V> {
    return flatMap<[K, V[]], V>(([_key, values]) => values)(this.#value);
  }

  [Symbol.iterator](): IterableIterator<[K, V]> {
    return this.entries();
  }

  [Symbol.toStringTag] = "MultiMap";
}
