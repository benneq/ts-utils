import { chunk } from "./chunk";

describe("iterable.concat", () => {
  it("should chunk the elements of the Iterables in the given order", () => {
    const iterable = chunk(2)([1, 2, 3, 4, 5]);

    expectIterableToEqual(iterable, [[1, 2], [3, 4], [5]], { toEqual: true });
  });

  it("should fill the remaining empty spaces", () => {
    const iterable = chunk(4, 0)([1, 2, 3, 4, 5]);

    expectIterableToEqual(
      iterable,
      [
        [1, 2, 3, 4],
        [5, 0, 0, 0],
      ],
      { toEqual: true }
    );
  });

  it("should not fill if there are no remaining spaces", () => {
    const iterable = chunk(4, 0)([1, 2, 3, 4]);

    expectIterableToEqual(iterable, [[1, 2, 3, 4]], { toEqual: true });
  });
});

export {};
