import { zip } from "./zip";

describe("iterable.zip", () => {
  it("should be done immediatly if no Iterable was provided", () => {
    const iterable = zip();

    expectIterableToEqual(iterable, []);
  });

  it("should be done immediatly if all provided Iterables are empty", () => {
    const iterable = zip([], [], []);

    expectIterableToEqual(iterable, []);
  });

  it("should yield the nth element of each Iterable combined as a tuple", () => {
    const iterable = zip([], [1], [2, 3]);

    expectIterableToEqual(
      iterable,
      [
        [undefined, 1, 2],
        [undefined, undefined, 3],
      ],
      { toEqual: true }
    );
  });
});

export {};
