import { Entry } from "@benneq/object";

/**
 * A {@link ReadonlyMultiMap} can have multiple values per key.
 *
 * @typeParam K - the key type
 * @typeParam V - the value type
 */
export interface ReadonlyMultiMap<K, V> extends Iterable<Entry<K, V>> {
  /**
   * @see {@link Map.forEach}
   */
  forEach(callbackfn: (value: V, key: K, multiMap: this) => void): void;

  /**
   * Gets all values for this key.
   *
   * Returns an empty iterable if the key does not exist.
   *
   * @param key - the key to look up
   * @returns an {@link Iterable} containing all values for this key
   */
  get(key: K): Iterable<V>;

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

  /**
   * @returns the number of entries in this {@link MultiMap}
   */
  readonly size: number;

  /**
   * @see {@link Map.entries}
   */
  entries(): IterableIterator<[K, V]>;

  /**
   * @see {@link Map.keys}
   */
  keys(): IterableIterator<K>;

  /**
   * @see {@link Map.forEach}
   */
  values(): IterableIterator<V>;

  [Symbol.toStringTag]: string;
}

/**
 * A {@link MultiMap} can have multiple values per key.
 *
 * @typeParam K - the key type
 * @typeParam V - the value type
 */
export interface MultiMap<K, V> extends ReadonlyMultiMap<K, V> {
  /**
   * Removes all entries.
   */
  clear(): void;

  /**
   * Deletes the key with all its values.
   *
   * @param key - the key to delete
   * @returns `true` if an entry was deleted, otherwise `false`
   */
  delete(key: K): boolean;

  /**
   * Deletes the first entry with the given `key` and `value`.
   *
   * @param key - the key to look for
   * @param value - the value to delete
   * @returns `true` if an entry was deleted, otherwise `false`
   */
  delete(key: K, value: V): boolean;

  /**
   * Set the values for a key and replaces all previous values for this key.
   *
   * If no values are provided all previous entries will be removed.
   *
   * @param key - the key to set
   * @param value - the values to set
   * @returns this {@link MultiMap}
   */
  set(key: K, values: Iterable<V>): this;

  /**
   * Adds a value for a key to this {@link MultiMap}.
   *
   * @param key - the key to look up
   * @param value - the value to add
   * @returns this {@link MultiMap}
   */
  add(key: K, value: V): this;

  /**
   * Adds all entries to this {@link MultiMap}.
   *
   * @param entries - the entries to add
   */
  addAll(entries: Iterable<Entry<K, V>>): void;
}
