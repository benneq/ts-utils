import { Entry } from "@benneq/object";
import { MultiMap } from "./multiMap";

/**
 * A {@link SetMultiMap} can contain each value only once per key.
 *
 * @typeParam K - the key type
 * @typeParam V - the value type
 */
export class SetMultiMap<K, V> extends MultiMap<K, V> {
  #value;

  /**
   * Create a new {@link SetMultiMap} from the given entries.
   *
   * @param iterable - the optional {@link Iterable} to consume the entries from
   */
  constructor(iterable?: Iterable<Entry<K, V>>) {
    const value = new Map<K, Set<V>>();
    super(value);
    this.#value = value;

    if (iterable) {
      this.addAll(iterable);
    }
  }

  add(key: K, value: V): this {
    const values = this.#value.get(key) || new Set();
    values.add(value);
    this.#value.set(key, values);
    return this;
  }

  set(key: K, values: Iterable<V>): this {
    const value = new Set(values);
    if (value.size) {
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

      if (!values.delete(value)) {
        return false;
      }

      if (values.size) {
        return true;
      }
    }

    return this.#value.delete(key);
  }
}
