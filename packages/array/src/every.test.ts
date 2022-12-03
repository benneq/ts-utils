import { alwaysFalse } from "@benneq/predicate";
import { isEven } from "@benneq/number";
import { every } from "./every";

describe("array.every", () => {
  it("should return true if array is empty", () => {
    const result = every(alwaysFalse)([]);

    expect(result).toBe(true);
  });

  it("should return true if all elements matches the predicate", () => {
    const result = every(isEven)([2, 4, 6]);

    expect(result).toBe(true);
  });

  it("should return false if any element does not match the predicate", () => {
    const result = every(isEven)([2, 3, 6]);

    expect(result).toBe(false);
  });
});

export {};
