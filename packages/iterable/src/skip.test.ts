import { skip } from "./skip";

describe("iterable.skip", () => {
  it("should yield no elements if Iterable is empty", () => {
    const iterable = skip(1)([]);

    expectIterableToEqual(iterable, []);
  });

  it("should yield the same elements if skipSize is 0", () => {
    const iterable = skip(0)([1, 2, 3]);

    expectIterableToEqual(iterable, [1, 2, 3]);
  });

  it("should not yield the first 3 elements", () => {
    const iterable = skip(3)([0, 1, 2, 3, 4]);

    expectIterableToEqual(iterable, [3, 4]);
  });
});

export {};
