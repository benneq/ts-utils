import { Entry } from "@benneq/object";
import { AbstractMultiMap } from "./abstractMultiMap";
import { deleteFirst } from "@benneq/array";
import { computeIfAbsent } from "@benneq/map";

/**
 * An {@link ArrayMultiMap} can contain the same value multiple times per key.
 *
 * @typeParam K - the key type
 * @typeParam V - the value type
 */
export class ArrayMultiMap<K, V> extends AbstractMultiMap<K, V> {
  #value;

  /**
   * Create a new {@link ArrayMultiMap} from the given entries.
   *
   * @param iterable - the optional {@link Iterable} of entries
   */
  constructor(iterable?: Iterable<Entry<K, V>>) {
    const value = new Map<K, V[]>();
    super(value);
    this.#value = value;

    if (iterable) {
      this.addAll(iterable);
    }
  }

  add(key: K, value: V): this {
    (computeIfAbsent(this.#value)(key, () => []) as V[]).push(value);
    return this;
  }

  set(key: K, values: Iterable<V>): this {
    const value = [...values];
    if (value.length) {
      this.#value.set(key, value);
    } else {
      this.#value.delete(key);
    }
    return this;
  }

  delete(key: K, value?: V): boolean {
    if (value) {
      const values = this.#value.get(key);
      if (!values || !deleteFirst<V>(value)(values)) {
        return false;
      }

      if (values.length) {
        return true;
      }
    }

    return this.#value.delete(key);
  }
}
