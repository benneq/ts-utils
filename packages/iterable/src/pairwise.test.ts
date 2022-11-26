import { pairwise } from "./pairwise";

describe("iterable.pairwise", () => {
  it("should yield no values if iterable is empty", () => {
    expectIterableToEqual(pairwise()([]), []);
  });

  it("should yield no values if iterable has less values than pairSize", () => {
    expectIterableToEqual(pairwise(2)([1]), []);
  });

  it("should yield pairs if no pairSize is provided", () => {
    expectIterableToEqual(
      pairwise()([1, 2, 3]),
      [
        [1, 2],
        [2, 3],
      ],
      { toEqual: true }
    );
  });

  it("should yield triplets if pairSize is 3", () => {
    expectIterableToEqual(
      pairwise(3)([1, 2, 3, 4]),
      [
        [1, 2, 3],
        [2, 3, 4],
      ],
      { toEqual: true }
    );
  });
});

export {};
