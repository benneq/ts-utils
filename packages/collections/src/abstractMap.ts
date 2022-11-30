import { map } from "@benneq/iterable";

/**
 * An abstract helper class that implements the common base functionality of a
 * {@link Map}.
 */
export abstract class AbstractMap<K, V> implements Map<K, V> {
  /**
   * @see {@link Map.clear}
   */
  abstract clear(): void;

  /**
   * @see {@link Map.delete}
   */
  abstract delete(key: K): boolean;

  /**
   * @see {@link Map.get}
   */
  abstract get(key: K): V | undefined;

  /**
   * @see {@link Map.has}
   */
  abstract has(key: K): boolean;

  /**
   * @see {@link Map.set}
   */
  abstract set(key: K, value: V): this;

  /**
   * @see {@link Map.size}
   */
  abstract size: number;

  /**
   * @see {@link Map.entries}
   */
  abstract entries(): IterableIterator<[K, V]>;

  /**
   * @see {@link Map[Symbol.toStringTag]}
   */
  abstract [Symbol.toStringTag]: string;

  /**
   * @see {@link Map.forEach}
   */
  forEach(callbackfn: (value: V, key: K, sortedMap: this) => void): void {
    for (const [key, value] of this) {
      callbackfn(value, key, this);
    }
  }

  /**
   * @see {@link Map.keys}
   */
  keys(): IterableIterator<K> {
    return map<[K, V], K>((entry) => entry[0])(this);
  }

  /**
   * @see {@link Map.values}
   */
  values(): IterableIterator<V> {
    return map<[K, V], V>((entry) => entry[1])(this);
  }

  /**
   * @see {@link Map[Symbol.iterator]}
   */
  [Symbol.iterator](): IterableIterator<[K, V]> {
    return this.entries();
  }
}
