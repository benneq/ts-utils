import { alwaysFalse, alwaysTrue } from "@benneq/predicate";
import { find } from "./find";

describe("iterable.find", () => {
  it("should return undefined if the Iterable is empty and no default value is provided", () => {
    expect(find(alwaysTrue)([])).toBeUndefined();
    expect(find(alwaysFalse)([])).toBeUndefined();
  });

  it("should return the default value if the Iterable is empty", () => {
    const [defaultValue] = symbolGenerator();

    expect(find(alwaysTrue, defaultValue)([])).toBe(defaultValue);
    expect(find(alwaysFalse, defaultValue)([])).toBe(defaultValue);
  });

  it("should return the first element of the iterable matching the Predicate", () => {
    const [value1, value2] = symbolGenerator();

    expect(find(alwaysTrue)([value1, Symbol()])).toBe(value1);
    expect(find(alwaysTrue, Symbol())([value1, Symbol()])).toBe(value1);

    expect(find((value) => value === value2)([value1, value2])).toBe(value2);
  });
});

export {};
