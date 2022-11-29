import { Mapper } from "@benneq/function";
import { map } from "@benneq/iterable";
import { AbstractSet } from "./abstractSet";

export class MappedSet<T> extends AbstractSet<T> {
  #mapper;
  #value;

  constructor(mapper: Mapper<T, unknown>, iterable?: Iterable<T>) {
    super();
    this.#mapper = mapper;
    this.#value = new Map(
      iterable &&
        map<T, [unknown, T]>((value) => [mapper(value), value])(iterable)
    );
  }

  add(value: T): this {
    this.#value.set(this.#mapper(value), value);
    return this;
  }

  clear(): void {
    this.#value.clear();
  }

  delete(value: T): boolean {
    return this.#value.delete(this.#mapper(value));
  }

  has(value: T): boolean {
    return this.#value.has(this.#mapper(value));
  }

  get size(): number {
    return this.#value.size;
  }

  values(): IterableIterator<T> {
    return this.#value.values();
  }

  [Symbol.toStringTag] = "MappedSet";
}
