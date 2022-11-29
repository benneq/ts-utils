import { count, flatMap, map, some } from "@benneq/iterable";
import { Entry } from "@benneq/object";
import { MultiMap } from "./_types";

/**
 * A {@link AbstractMultiMap} can have multiple values per key.
 *
 * @typeParam K - the key type
 * @typeParam V - the value type
 */
export abstract class AbstractMultiMap<K, V> implements MultiMap<K, V> {
  #value;

  /**
   * Create a new {@link AbstractMultiMap} from the given {@link Map}.
   *
   * @param map - the underlying {@link Map} object to use
   */
  protected constructor(map: Map<K, Iterable<V>>) {
    this.#value = map;
  }

  /**
   * @see {@link Map.clear}
   */
  clear(): void {
    this.#value.clear();
  }

  /**
   * Deletes the key with all its values.
   *
   * @see {@link Map.delete}
   *
   * @param key - the key to delete
   * @returns `true` if an entry was deleted, otherwise `false`
   */
  abstract delete(key: K): boolean;

  /**
   * Deletes the first entry with the given `key` and `value`.
   *
   * @see {@link Map.delete}
   *
   * @param key - the key to look for
   * @param value - the value to delete
   * @returns `true` if an entry was deleted, otherwise `false`
   */
  abstract delete(key: K, value: V): boolean;

  /**
   * @see {@link Map.forEach}
   */
  forEach(callbackfn: (value: V, key: K, multiMap: this) => void): void {
    for (const [key, value] of this) {
      callbackfn(value, key, this);
    }
  }

  /**
   * Gets all values for this key.
   *
   * Returns an empty iterable if the key does not exist.
   *
   * @param key - the key to look up
   * @returns an {@link Iterable} containing all values for this key
   */
  get(key: K): Iterable<V> {
    return this.#value.get(key) || [];
  }

  /**
   * Checks if this {@link MultiMap} contains an entry for this key.
   *
   * @see {@link Map.has}
   *
   * @param key - the key to look up
   * @returns `true` if an entry with the given key exists, otherwise `false`
   */
  has(key: K): boolean;

  /**
   * Checks if this {@link MultiMap} contains an entry with the key and value.
   *
   * @see {@link Map.has}
   *
   * @param key - the key to look up
   * @param value - the value to look for
   * @returns `true` if an entry with the given key and value exists, otherwise `false`
   */
  has(key: K, value: V): boolean;

  has(key: K, value?: V): boolean {
    return (
      this.#value.has(key) &&
      (!value || some((e) => e === value)(this.#value.get(key) as Iterable<V>))
    );
  }

  /**
   * Set the values for a key and replaces all previous values for this key.
   *
   * If no values are provided all previous entries will be removed.
   *
   * @see {@link Map.set}
   *
   * @param key - the key to set
   * @param value - the values to set
   * @returns this {@link AbstractMultiMap}
   */
  abstract set(key: K, values: Iterable<V>): this;

  /**
   * Adds a value for a key to this {@link AbstractMultiMap}.
   *
   * @param key - the key to look up
   * @param value - the value to add
   * @returns this {@link AbstractMultiMap}
   */
  abstract add(key: K, value: V): this;

  addAll(entries: Iterable<Entry<K, V>>): void {
    if (entries) {
      for (const [key, value] of entries) {
        this.add(key, value);
      }
    }
  }

  /**
   * @returns the number of entries in this {@link MultiMap}
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
    return map<[K, V], V>(([_key, value]) => value)(this);
  }

  [Symbol.iterator](): IterableIterator<[K, V]> {
    return this.entries();
  }

  [Symbol.toStringTag] = "MultiMap";
}
