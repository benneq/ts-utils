import { interleave } from "./interleave";

describe("iterable.interleave", () => {
  it("should be done immediatly if no Iterable was provided", () => {
    const iterable = interleave();
    const generator = iterable[Symbol.iterator]();
    expect(generator.next().done).toBe(true);
  });

  it("should be done immediatly if all provided Iterables are empty", () => {
    const iterable = interleave([], [], []);
    const generator = iterable[Symbol.iterator]();
    expect(generator.next().done).toBe(true);
  });

  it("should yield the nth element of each iterable in order", () => {
    const iterable = interleave([1, 2, 3], [4, 5]);
    const generator = iterable[Symbol.iterator]();
    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(4);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().value).toEqual(5);
    expect(generator.next().value).toEqual(3);
    expect(generator.next().value).toEqual(undefined);
    expect(generator.next().done).toBe(true);
  });
});

export {};
