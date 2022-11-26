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

  empty = false;

  get comparator() {
    return this.#comparator;
  }

  get from() {
    return this.#from;
  }

  get to() {
    return this.#to;
  }
}
