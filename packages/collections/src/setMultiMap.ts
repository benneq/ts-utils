import { identity } from "@benneq/function";
import { count, flatMap, map, some } from "@benneq/iterable";
import { computeIfAbsent } from "@benneq/map";
import { Entry } from "@benneq/object";
import { AbstractMultiMap } from "./abstractMultiMap";
import { MultiMap } from "./_types";

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

export const absmm = <K, V>(data: Map<K, Iterable<V>>) => {
  return {
    clear() {
      data.clear();
    },
    addAll(entries: any) {
      for (const [key, value] of entries) {
        // this.add(key, value);
      }
      return this;
    },
    forEach(callbackfn: any) {
      for (const [key, value] of this) {
        callbackfn(value, key, this);
      }
    },
    has(key: any, value?: V) {
      return (
        data.has(key) &&
        (!value || some((e) => e === value)(data.get(key) as Iterable<V>))
      );
    },
    get(key: any) {
      return data.get(key) || [];
    },
    values() {
      return flatMap<Iterable<V>, V>(identity)(data.values());
    },
    entries() {
      return flatMap<[K, Iterable<V>], [K, V]>(([key, values]) =>
        map<V, [K, V]>((value) => [key, value])(values)
      )(data);
    },
    get size() {
      return count(this) || 0;
    },
    keys() {
      return data.keys();
    },
    [Symbol.toStringTag]: "MultiMap",
    [Symbol.iterator]() {
      return this.entries();
    },
  };
};

export const smm = <K, V>(iterable?: Iterable<Entry<K, V>>): MultiMap<K, V> => {
  const data = new Map<K, Set<V>>();

  const a = (x: any) => (key: K, value: V) => {
    (computeIfAbsent(data)(key, () => new Set()) as Set<V>).add(value);
    return x;
  };

  if (iterable) {
    for (const [key, value] of iterable) {
      a("")(key, value);
    }
  }

  return {
    ...absmm(data),

    delete(key, value?: V) {
      if (value) {
        const values = data.get(key);
        if (!values || !values.delete(value)) {
          return false;
        }

        if (values.size) {
          return true;
        }
      }

      return data.delete(key);
    },

    set(key, values) {
      const value = new Set(values);
      if (value.size) {
        data.set(key, value);
      } else {
        data.delete(key);
      }
      return this;
    },

    add: a(this),
    // addAll(entries) {
    //   for(const [key, value] of entries) {
    //     this.add(key, value);
    //   }
    //   return this;
    // },
    // forEach(callbackfn) {
    //   for (const [key, value] of this) {
    //     callbackfn(value, key, this);
    //   }
    // },
    // has(key, value?: V) {
    //   return (
    //     data.has(key) &&
    //     (!value || some((e) => e === value)(data.get(key) as Iterable<V>))
    //   );
    // },
    // get(key) {
    //   return data.get(key) || [];
    // },
    // values() {
    //   return flatMap<Iterable<V>, V>(identity)(data.values());
    // },
    // entries() {
    //   return flatMap<[K, Iterable<V>], [K, V]>(([key, values]) =>
    //     map<V, [K, V]>((value) => [key, value])(values)
    //   )(data);
    // },
    // get size() {
    //   return count(this) || 0;
    // },
    // keys() {
    //   return data.keys();
    // },
    // [Symbol.toStringTag]: "MultiMap",
    // [Symbol.iterator]() {
    //   return this.entries();
    // }
  };
};
