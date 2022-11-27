import { Entry } from "@benneq/object";
import { MultiMap } from "./multiMap";

export class SetMultiMap<K, V> extends MultiMap<K, V> {
  #value;

  constructor(iterable?: Iterable<Entry<K, V>>) {
    const value = new Map<K, Set<V>>();
    super(value, iterable);
    this.#value = value;
  }

  add(key: K, value: V): this {
    const values = (
      this.#value.has(key) ? this.#value.get(key) : new Set<V>()
    ) as Set<V>;
    values.add(value);
    this.#value.set(key, values);
    return this;
  }

  set(key: K, values: Iterable<V>): this {
    this.#value.set(key, new Set(values));
    return this;
  }

  delete(key: K, value?: V): boolean {
    if (value) {
      const values = this.#value.get(key);
      if (!values) {
        return false;
      }

      const deleted = values.delete(value);
      if (!deleted) {
        return false;
      }

      if (values.size) {
        return true;
      }
    }

    return this.#value.delete(key);
  }
}
