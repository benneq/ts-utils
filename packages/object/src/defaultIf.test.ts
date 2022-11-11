import { alwaysFalse } from "@benneq/predicate";
import { alwaysTrue } from "@benneq/predicate";
import { defaultIf } from "./defaultIf";

describe("object.defaultIf", () => {
  it("should return the default value if Predicate returns true", () => {
    const [defaultValue] = symbolGenerator();

    expect(defaultIf(alwaysTrue)(defaultValue)(Symbol())).toBe(defaultValue);
    expect(defaultIf(alwaysTrue)(() => defaultValue)(Symbol())).toBe(
      defaultValue
    );
  });

  it("should return the provided value if Predicate returns false", () => {
    const [value] = symbolGenerator();

    expect(defaultIf(alwaysFalse)(Symbol())(value)).toBe(value);
  });
});

export {};
