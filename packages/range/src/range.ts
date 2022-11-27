import { Comparator } from "@benneq/comparator";

export abstract class Range<T> {
  #comparator;
  #from;
  #to;

  constructor(comparator: Comparator<T>, from: T, to: T) {
    this.#comparator = comparator;
    this.#from = from;
    this.#to = to;
  }

  abstract contains(value: T): boolean;

  readonly empty: boolean = false;

  get comparator(): Comparator<T> {
    return this.#comparator;
  }

  get from(): T {
    return this.#from;
  }

  get to(): T {
    return this.#to;
  }
}
