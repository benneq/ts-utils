import { dropWhile } from "./dropWhile";

describe("iterable.dropWhile", () => {
  it("should drop the first elements until the predicate becomes true", () => {
    const iterable = dropWhile((value: number) => value < 3)([1, 3, 2, 4]);

    expectIterableToEqual(iterable, [3, 2, 4]);
  });
});

export {};
