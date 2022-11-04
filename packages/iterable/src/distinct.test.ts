import { distinct } from "./distinct";

describe("iterable.distinct", () => {
  it("should yield all unique elements", () => {
    const generator = distinct()([1, 2, 1, 3]);

    expect(generator.next().value).toBe(1);
    expect(generator.next().value).toBe(2);
    expect(generator.next().value).toBe(3);
    expect(generator.next().done).toBe(true);
  });

  it("should yield all unique elements according to the mapper", () => {
    const generator = distinct<number>((x) => x % 3)([1, 4, 2, 6]);

    expect(generator.next().value).toBe(1);
    expect(generator.next().value).toBe(2);
    expect(generator.next().value).toBe(6);
    expect(generator.next().done).toBe(true);
  });
});

export {};
