import { Entry } from "@benneq/object";
import { MultiMap } from "./multiMap";
import { deleteAt, isEmpty } from "@benneq/array";

export class ArrayMultiMap<K, V> extends MultiMap<K, V> {
  #value;

  constructor(iterable?: Iterable<Entry<K, V>>) {
    const value = new Map<K, V[]>();
    super(value, iterable);
    this.#value = value;
  }

  add(key: K, value: V): this {
    const values = (this.#value.has(key) ? this.#value.get(key) : []) as V[];
    values.push(value);
    this.#value.set(key, values);
    return this;
  }

  set(key: K, values: Iterable<V>): this {
    this.#value.set(key, [...values]);
    return this;
  }

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
}
