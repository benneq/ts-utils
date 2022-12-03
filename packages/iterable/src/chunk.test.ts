import { chunk } from "./chunk";

describe("iterable.concat", () => {
  it("should chunk the elements of the Iterables in the given order", () => {
    const iterable = chunk(2)([1, 2, 3, 4, 5]);

    expectIterableToEqual(iterable, [[1, 2], [3, 4], [5]], { toEqual: true });
  });
});

export {};
