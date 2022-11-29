import { computeIfAbsent } from "@benneq/map";
import { Entry } from "@benneq/object";
import { AbstractMultiMap } from "./abstractMultiMap";

/**
 * A {@link SetMultiMap} can contain each value only once per key.
 *
 * @typeParam K - the key type
 * @typeParam V - the value type
 */
export class SetMultiMap<K, V> extends AbstractMultiMap<K, V> {
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
    (computeIfAbsent(this.#value)(key, () => new Set()) as Set<V>).add(value);
    return this;
  }

  set(key: K, values: Iterable<V>): this {
    const value = new Set(values);
    if (value.size) {
      this.#value.set(key, value);
    } else {
      this.#value.delete(key);
    }
    return this;
  }

  delete(key: K, value?: V): boolean {
    if (value) {
      const values = this.#value.get(key);
      if (!values || !values.delete(value)) {
        return false;
      }

      if (values.size) {
        return true;
      }
    }

    return this.#value.delete(key);
  }
}
