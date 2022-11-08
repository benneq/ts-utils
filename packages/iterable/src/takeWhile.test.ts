import { takeWhile } from "./takeWhile";

describe("iterable.takeWhile", () => {
  it("should yield all elements until the predicate becomes false", () => {
    const iterable = takeWhile((value: number) => value < 3)([0, 1, 3, 2]);
    const generator = iterable[Symbol.iterator]();
    expect(generator.next().value).toBe(0);
    expect(generator.next().value).toBe(1);
    expect(generator.next().done).toBe(true);
  });
});

export {};
