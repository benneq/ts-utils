import { Entry } from "@benneq/object";

export interface ReadonlyMultiMap<K, V> extends Iterable<Entry<K, V>> {
  forEach(callbackfn: (value: V, key: K, multiMap: this) => void): void;

  get(key: K): Iterable<V>;

  has(key: K, value?: V): boolean;

  readonly size: number;

  entries(): IterableIterator<[K, V]>;

  keys(): IterableIterator<K>;

  values(): IterableIterator<V>;

  [Symbol.toStringTag]: string;
}

export interface MultiMap<K, V> extends ReadonlyMultiMap<K, V> {
  clear(): void;

  delete(key: K, value?: V): boolean;

  set(key: K, values: Iterable<V>): this;

  add(key: K, value: V): this;

  addAll(entries: Iterable<Entry<K, V>>): void;
}
