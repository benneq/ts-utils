import { Mapper } from "@benneq/function";
import { AbstractSet } from "./abstractSet";

export class MappedSet<T> extends AbstractSet<T> {
  #mapper;
  #value;

  constructor(mapper: Mapper<T, unknown>) {
    super();
    this.#mapper = mapper;
    this.#value = new Map<unknown, T>();
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
