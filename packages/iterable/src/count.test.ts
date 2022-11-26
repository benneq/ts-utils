import { count } from "./count";

describe("iterable.count", () => {
  it("should return 0 if iterable is empty", () => {
    const result = count([]);
    expect(result).toBe(0);
  });

  it("should return the number of elements of the iterable", () => {
    const result = count([1, 2, 3]);
    expect(result).toBe(3);
  });
});

export {};
