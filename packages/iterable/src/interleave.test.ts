import { interleave } from "./interleave";

describe("iterable.interleave", () => {
  it("should be done immediatly if no Iterable was provided", () => {
    const iterable = interleave();

    expectIterableToEqual(iterable, []);
  });

  it("should be done immediatly if all provided Iterables are empty", () => {
    const iterable = interleave([], [], []);

    expectIterableToEqual(iterable, []);
  });

  it("should yield the nth element of each iterable in order", () => {
    const iterable = interleave([1, 2, 3], [4, 5]);

    expectIterableToEqual(iterable, [1, 4, 2, 5, 3, undefined] as unknown[]);
  });
});

export {};
