import { avg } from "./avg";

describe("iterable.sum", () => {
  it("should return undefined if iterable is empty", () => {
    const result = avg([]);
    expect(result).toBeUndefined();
  });

  it("should return the avg", () => {
    const result = avg([1, 2, 3]);
    expect(result).toBe(2);
  });
});

export {};
