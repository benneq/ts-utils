import { zip } from "./zip";

describe("iterable.zip", () => {
  it("should be done immediatly if no Iterable was provided", () => {
    const iterable = zip();
    const generator = iterable[Symbol.iterator]();
    expect(generator.next().done).toBe(true);
  });

  it("should be done immediatly if all provided Iterables are empty", () => {
    const iterable = zip([], [], []);
    const generator = iterable[Symbol.iterator]();
    expect(generator.next().done).toBe(true);
  });

  it("should yield the nth element of each Iterable combined as a tuple", () => {
    const iterable = zip([], [1], [2, 3]);
    const generator = iterable[Symbol.iterator]();
    expect(generator.next().value).toEqual([undefined, 1, 2]);
    expect(generator.next().value).toEqual([undefined, undefined, 3]);
    expect(generator.next().done).toBe(true);
  });
});

export {};
