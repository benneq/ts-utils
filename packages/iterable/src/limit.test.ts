import { limit } from "./limit";

describe("iterable.limit", () => {
  it("should yield only the first 3 elements of the Iterable", () => {
    const iterable = limit(3)([0, 1, 2, 3]);

    expectIterableToEqual(iterable, [0, 1, 2]);
  });
});

export {};
