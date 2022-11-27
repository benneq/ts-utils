import { limit } from "./limit";

describe("iterable.limit", () => {
  it("should yield no elements if maxSize is 0", () => {
    const iterable = limit(0)([]);

    expectIterableToEqual(iterable, []);
  });

  it("should yield the same elements if maxSize is greater than the number of elements", () => {
    const iterable = limit(5)([1, 2, 3]);

    expectIterableToEqual(iterable, [1, 2, 3]);
  });

  it("should yield only the first 3 elements of the Iterable", () => {
    const iterable = limit(3)([0, 1, 2, 3]);

    expectIterableToEqual(iterable, [0, 1, 2]);
  });

  it("should yield all elements if maxSize is negative", () => {
    const iterable = limit(-1)([0, 1, 2, 3]);

    expectIterableToEqual(iterable, [0, 1, 2, 3]);
  });
});

export {};
