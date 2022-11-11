import { takeWhile } from "./takeWhile";

describe("iterable.takeWhile", () => {
  it("should yield all elements until the predicate becomes false", () => {
    const iterable = takeWhile((value: number) => value < 3)([0, 1, 3, 2]);

    expectIterableToEqual(iterable, [0, 1]);
  });
});

export {};
