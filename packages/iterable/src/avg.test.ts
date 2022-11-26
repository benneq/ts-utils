import { avg } from "./avg";

describe("iterable.sum", () => {
  it("should return 0 if iterable is empty", () => {
    const result = avg([]);
    expect(result).toBe(0);
  });

  it("should return the avg", () => {
    const result = avg([1, 2, 3]);
    expect(result).toBe(2);
  });
});

export {};
