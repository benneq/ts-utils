import { filter } from "./filter";

describe("iterable.filter", () => {
  it("should only yield elements for which the Predicate is true", () => {
    const iterable = filter((value: number) => value > 3)([2, 3, 4, 5]);
    const generator = iterable[Symbol.iterator]();
    expect(generator.next().value).toBe(4);
    expect(generator.next().value).toBe(5);
    expect(generator.next().done).toBe(true);
  });
});

export {};
