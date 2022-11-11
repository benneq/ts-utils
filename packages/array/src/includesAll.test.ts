import { includesAll } from "./includesAll";

describe("array.includesAll", () => {
  it("should return true if no values were provided", () => {
    const [value] = symbolGenerator();

    expect(includesAll([])([])).toBe(true);
    expect(includesAll<symbol>([])([value])).toBe(true);
  });

  it("should return true if Array includes all given values", () => {
    const [value1, value2, value3] = symbolGenerator();

    expect(includesAll([value1])([value1])).toBe(true);
    expect(includesAll([value2, value3])([value1, value2, value3])).toBe(true);
  });

  it("should return false if Array does not include all given values", () => {
    const [value1, value2, value3] = symbolGenerator();

    expect(includesAll([value1, value2])([value1])).toBe(false);
    expect(includesAll([value1, value2])([value1, value3])).toBe(false);
  });
});

export {};
