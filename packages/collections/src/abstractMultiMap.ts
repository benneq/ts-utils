import { identity } from "@benneq/function";
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

  clear(): void {
    this.#value.clear();
  }

  abstract delete(key: K): boolean;

  abstract delete(key: K, value: V): boolean;

  forEach(callbackfn: (value: V, key: K, multiMap: this) => void): void {
    for (const [key, value] of this) {
      callbackfn(value, key, this);
    }
  }

  get(key: K): Iterable<V> {
    return this.#value.get(key) || [];
  }

  has(key: K, value?: V): boolean {
    return (
      this.#value.has(key) &&
      (!value || some((e) => e === value)(this.#value.get(key) as Iterable<V>))
    );
  }

  abstract set(key: K, values: Iterable<V>): this;

  abstract add(key: K, value: V): this;

  addAll(entries: Iterable<Entry<K, V>>): void {
    for (const [key, value] of entries) {
      this.add(key, value);
    }
  }

  get size(): number {
    return count(this) || 0;
  }

  entries(): IterableIterator<[K, V]> {
    return flatMap<[K, Iterable<V>], [K, V]>(([key, values]) =>
      map<V, [K, V]>((value) => [key, value])(values)
    )(this.#value);
  }

  keys(): IterableIterator<K> {
    return this.#value.keys();
  }

  values(): IterableIterator<V> {
    return flatMap<Iterable<V>, V>(identity)(this.#value.values());
  }

  [Symbol.iterator](): IterableIterator<[K, V]> {
    return this.entries();
  }

  [Symbol.toStringTag] = "MultiMap";
}
