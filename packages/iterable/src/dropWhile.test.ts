import { alwaysFalse, alwaysTrue } from "@benneq/predicate";
import { dropWhile } from "./dropWhile";

describe("iterable.dropWhile", () => {
  it("should drop the first elements until the predicate becomes true", () => {
    const iterable = dropWhile<number>((value) => value < 3)([1, 3, 2, 4]);

    expectIterableToEqual(iterable, [3, 2, 4]);
  });

  it("should drop the first elements until the predicate becomes true", () => {
    const iterable = dropWhile(alwaysFalse)([1, 3, 2, 4]);

    expectIterableToEqual(iterable, [1, 3, 2, 4]);
  });

  it("should drop the first elements until the predicate becomes true", () => {
    const iterable = dropWhile(alwaysTrue)([1, 3, 2, 4]);

    expectIterableToEqual(iterable, []);
  });
});

export {};
