import { Mapper } from "@benneq/function";
import { map } from "@benneq/iterable";

export class MappedSet<T> implements Set<T> {
  #mapper;
  #value;

  constructor(mapper: Mapper<T, unknown>) {
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

  forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void): void {
    for (const value of this) {
      callbackfn(value, value, this);
    }
  }

  has(value: T): boolean {
    return this.#value.has(this.#mapper(value));
  }

  get size(): number {
    return this.#value.size;
  }

  entries(): IterableIterator<[T, T]> {
    return map<T, [T, T]>((value) => [value, value])(this.values());
  }

  keys(): IterableIterator<T> {
    return this.values();
  }

  values(): IterableIterator<T> {
    return this.#value.values();
  }

  [Symbol.iterator](): IterableIterator<T> {
    return this.values();
  }

  [Symbol.toStringTag] = "MappedSet";
}
