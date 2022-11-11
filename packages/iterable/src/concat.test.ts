import { concat } from "./concat";

describe("iterable.concat", () => {
  it("should yield the elements of the Iterables in the given order", () => {
    const iterable = concat([
      [2, 1],
      [3, 4],
    ]);

    expectIterableToEqual(iterable, [2, 1, 3, 4]);
  });
});

export {};
