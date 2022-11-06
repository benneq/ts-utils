import { chunk } from "./chunk";

describe("iterable.concat", () => {
  it("should chunk the elements of the Iterables in the given order", () => {
    const generator = chunk(2)([1, 2, 3, 4, 5]);
    expect(generator.next().value).toEqual([1, 2]);
    expect(generator.next().value).toEqual([3, 4]);
    expect(generator.next().value).toEqual([5]);
    expect(generator.next().done).toBe(true);
  });
});

export {};
