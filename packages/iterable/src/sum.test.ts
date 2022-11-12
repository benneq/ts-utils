import { sum } from "./sum";

describe("iterable.sum", () => {
  it("should return 0 if iterable is empty", () => {
    const result = sum([]);
    expect(result).toBe(0);
  });

  it("should return the sum", () => {
    const result = sum([1, 2, 3]);
    expect(result).toBe(6);
  });
});

export {};
