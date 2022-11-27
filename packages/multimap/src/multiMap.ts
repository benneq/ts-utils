import { count, flatMap, map, some } from "@benneq/iterable";
import { Entry } from "@benneq/object";

export abstract class MultiMap<K, V> {
  #value;

  protected constructor(
    map: Map<K, Iterable<V>>,
    iterable?: Iterable<Entry<K, V>>
  ) {
    this.#value = map;

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
  abstract delete(key: K, value?: V): boolean;

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
      (!value || some((e) => e === value)(this.#value.get(key) as Iterable<V>))
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
  abstract set(key: K, values: Iterable<V>): this;

  /**
   * Adds a value for a key to this {@link MultiMap}.
   *
   * @param key - the key to look up
   * @param value - the value to add
   * @returns this {@link MultiMap}
   */
  abstract add(key: K, value: V): this;

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
    return flatMap<[K, Iterable<V>], [K, V]>(([key, values]) =>
      map<V, [K, V]>((value) => [key, value])(values)
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
    return flatMap<[K, Iterable<V>], V>(([_key, values]) => values)(
      this.#value
    );
  }

  [Symbol.iterator](): IterableIterator<[K, V]> {
    return this.entries();
  }

  [Symbol.toStringTag] = "MultiMap";
}
