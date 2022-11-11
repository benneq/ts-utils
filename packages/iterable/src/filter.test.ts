import { filter } from "./filter";

describe("iterable.filter", () => {
  it("should only yield elements for which the Predicate is true", () => {
    const iterable = filter((value: number) => value > 3)([2, 3, 4, 5]);

    expectIterableToEqual(iterable, [4, 5]);
  });
});

export {};
