import { first } from "./first";

describe("iterable.first", () => {
  it("should return undefined if the Iterable is empty and no default value is provided", () => {
    expect(first()([])).toBeUndefined();
  });

  it("should return the default value if the Iterable is empty", () => {
    const [defaultValue] = symbolGenerator();
    expect(first(defaultValue)([])).toBe(defaultValue);
  });

  it("should return the first element of the iterable", () => {
    const [value] = symbolGenerator();
    expect(first<symbol>()([value, Symbol()])).toBe(value);
    expect(first<symbol>(Symbol())([value, Symbol()])).toBe(value);
  });
});

export {};
