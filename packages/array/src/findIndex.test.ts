import { alwaysFalse, alwaysTrue } from "@benneq/predicate";
import { findIndex } from "./findIndex";

describe("array.findIndex", () => {
  it("should return the index of the first element that matches the predicate", () => {
    const [value1, value2] = symbolGenerator();
    const array = [value1, value2];

    const result = findIndex(alwaysTrue)(array);

    expect(result).toBe(0);
  });

  it("should return -1 if predicate does not match", () => {
    const [value1] = symbolGenerator();
    const array = [value1];

    const result = findIndex(alwaysFalse)(array);

    expect(result).toBe(-1);
  });
});

export {};
