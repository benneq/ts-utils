import { iterate } from "./iterate";

describe("iterable.iterate", () => {
  it("should yield infinitly if no hasNext provided", () => {
    const iterable = iterate<number>(1, (x) => x + 1);
    const generator = iterable[Symbol.iterator]();
    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().value).toEqual(3);
    expect(generator.next().value).toEqual(4);
    expect(generator.next().value).toEqual(5);
    expect(generator.next().done).toBe(false);
  });

  it("should yield until hasNext returns false", () => {
    const iterable = iterate<number>(
      1,
      (x) => x + 1,
      (x) => x < 3
    );
    const generator = iterable[Symbol.iterator]();
    expect(generator.next().value).toEqual(1);
    expect(generator.next().value).toEqual(2);
    expect(generator.next().value).toEqual(3);
    expect(generator.next().done).toBe(true);
  });
});

export {};
