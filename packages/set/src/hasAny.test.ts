import { hasAny } from "./hasAny";

describe("set.hasAny", () => {
  it("should return true if the Set contains any of the given values", () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(hasAny(new Set([value1]))([value1])).toBe(true);
    expect(hasAny(new Set([value1]))(new Set([value1]))).toBe(true);
    expect(hasAny(new Set([value1]))([value2, value1])).toBe(true);
    expect(hasAny(new Set([value1]))(new Set([value2, value1]))).toBe(true);

    expect(hasAny(new Set([value1, value2]))(new Set([value1]))).toBe(true);
    expect(hasAny(new Set([value1, value2]))(new Set([value2]))).toBe(true);
    expect(hasAny(new Set([value1, value2]))(new Set([value2, value1]))).toBe(
      true
    );
  });

  it("should return false if the Set contains none of the given values", () => {
    const value1 = Symbol();
    const value2 = Symbol();

    expect(hasAny(new Set())([])).toBe(false);
    expect(hasAny(new Set())(new Set())).toBe(false);
    expect(hasAny(new Set())([value1])).toBe(false);
    expect(hasAny(new Set())(new Set([value1]))).toBe(false);
    expect(hasAny(new Set([value1]))([])).toBe(false);
    expect(hasAny(new Set([value1]))(new Set())).toBe(false);
    expect(hasAny(new Set([value1]))([value2])).toBe(false);
    expect(hasAny(new Set([value1]))(new Set([value2]))).toBe(false);
  });
});

export {};
