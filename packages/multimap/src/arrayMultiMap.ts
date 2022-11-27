import { Entry } from "@benneq/object";
import { MultiMap } from "./multiMap";
import { deleteAt, isEmpty } from "@benneq/array";

/**
 * An {@link ArrayMultiMap} can contain the same value multiple times per key.
 *
 * @typeParam K - the key type
 * @typeParam V - the value type
 */
export class ArrayMultiMap<K, V> extends MultiMap<K, V> {
  #value;

  /**
   * Create a new {@link ArrayMultiMap} from the given entries.
   *
   * @param iterable - the optional {@link Iterable} to consume the entries from
   */
  constructor(iterable?: Iterable<Entry<K, V>>) {
    const value = new Map<K, V[]>();
    super(value);
    this.#value = value;

    if (iterable) {
      for (const [key, value] of iterable) {
        this.add(key, value);
      }
    }
  }

  add(key: K, value: V): this {
    const values = (this.#value.has(key) ? this.#value.get(key) : []) as V[];
    values.push(value);
    this.#value.set(key, values);
    return this;
  }

  set(key: K, values: Iterable<V>): this {
    const value = [...values];
    if (!isEmpty(value)) {
      this.#value.set(key, value);
    }
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
