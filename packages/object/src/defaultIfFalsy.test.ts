import { defaultIfFalsy } from "./defaultIfFalsy";

describe("object.defaultIfFalsy", () => {
  it("should return the default value if the provided value is Falsy", () => {
    const [value] = symbolGenerator();
    expect(defaultIfFalsy(value)(null)).toBe(value);
    expect(defaultIfFalsy(() => value)(null)).toBe(value);
    expect(defaultIfFalsy(value)(undefined)).toBe(value);
    expect(defaultIfFalsy(() => value)(undefined)).toBe(value);
    expect(defaultIfFalsy(value)("")).toBe(value);
    expect(defaultIfFalsy(() => value)("")).toBe(value);
  });

  it("it should return the provided value if it is not Falsy", () => {
    const [value] = symbolGenerator();
    expect(defaultIfFalsy(Symbol())(value)).toBe(value);
    expect(defaultIfFalsy(() => Symbol())(value)).toBe(value);
  });
});

export {};
