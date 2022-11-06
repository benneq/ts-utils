import { jest } from "@jest/globals";
import { isArrayBuffer } from "./isArrayBuffer";

describe("object.isArrayBuffer", () => {
  it("should return false if the provided value is not ArrayBuffer", () => {
    expect(isArrayBuffer(undefined)).toBe(false);
    expect(isArrayBuffer(null)).toBe(false);
    expect(isArrayBuffer(NaN)).toBe(false);
    expect(isArrayBuffer(0)).toBe(false);
    expect(isArrayBuffer({})).toBe(false);
    expect(isArrayBuffer("")).toBe(false);
    expect(isArrayBuffer([])).toBe(false);
    expect(isArrayBuffer(new Set())).toBe(false);
    expect(isArrayBuffer(new Map())).toBe(false);
    expect(isArrayBuffer(jest.fn())).toBe(false);
    expect(isArrayBuffer(true)).toBe(false);
  });

  it("should return true if the provided value is ArrayBuffer", () => {
    expect(isArrayBuffer(new ArrayBuffer(0))).toBe(true);
  });
});

export {};
