import { alwaysTrue } from "@benneq/predicate";
import { some } from "./some";

describe("array.some", () => {
  it("should return false if array is empty", () => {
    const result = some(alwaysTrue)([]);

    expect(result).toBe(false);
  });

  it("should return true if any element matches thee predicate", () => {
    const result = some((e) => e === 2)([1, 2, 3]);

    expect(result).toBe(true);
  });
});

export {};
