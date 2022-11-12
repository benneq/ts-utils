import { chunk } from "./chunk";

describe("iterable.concat", () => {
  it("should chunk the elements of the Iterables in the given order", () => {
    const iterable = chunk(2)([1, 2, 3, 4, 5]);

    expectIterableToEqual(iterable, [[1, 2], [3, 4], [5]], { toEqual: true });
  });

  it("should fill the remaining empty spaces", () => {
    const iterable = chunk(2, 0)([1, 2, 3, 4, 5]);

    expectIterableToEqual(
      iterable,
      [
        [1, 2],
        [3, 4],
        [5, 0],
      ],
      { toEqual: true }
    );
  });

  it("should chunk with size 1 if given chunkSize is 0", () => {
    const iterable = chunk(0)([1, 2, 3]);

    expectIterableToEqual(iterable, [[1], [2], [3]], { toEqual: true });
  });

  it("should chunk with size 1 if given chunkSize is negative", () => {
    const iterable = chunk(-1)([1, 2, 3]);

    expectIterableToEqual(iterable, [[1], [2], [3]], { toEqual: true });
  });
});

export {};
