import { sum } from "./sum";

describe("iterable.sum", () => {
  it("should return undefined if iterable is empty", () => {
    const result = sum([]);
    expect(result).toBeUndefined();
  });

  it("should return the sum", () => {
    const result = sum([1, 2, 3]);
    expect(result).toBe(6);
  });
});

export {};
