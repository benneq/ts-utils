import { distinct } from "./distinct";

describe("iterable.distinct", () => {
  it("should yield all unique elements", () => {
    const iterable = distinct()([1, 2, 1, 3]);

    expectIterableToEqual(iterable, [1, 2, 3]);
  });

  it("should yield all unique elements according to the mapper", () => {
    const iterable = distinct<number>((x) => x % 3)([1, 4, 2, 6]);

    expectIterableToEqual(iterable, [1, 2, 6]);
  });
});

export {};
