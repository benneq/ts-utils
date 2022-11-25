import { pairwise } from "./pairwise";

describe("iterable.pairwise", () => {
  it("should return the initialValue if reducerFn is identity", () => {
    expectIterableToEqual(pairwise([]), []);
  });

  it("should return constant if reducerFn returns constant value", () => {
    expectIterableToEqual(pairwise([1]), []);
  });

  it("should return the sum", () => {
    expectIterableToEqual(
      pairwise([1, 2, 3]),
      [
        [1, 2],
        [2, 3],
      ],
      { toEqual: true }
    );
  });
});

export {};
