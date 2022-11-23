import { alwaysFalse, alwaysTrue } from "@benneq/predicate";
import { findAndReplace } from "./findAndReplace";

describe("array.findAndReplace", () => {
  it("should replace the first Array element that matches the predicate", () => {
    const [value1, value2, value3] = symbolGenerator();

    const array = [value1, value2];

    findAndReplace(array, alwaysTrue, value3);

    expect(array).toEqual([value3, value2]);
  });

  it("should not modify the Array if predicate does not match", () => {
    const [value1, value2] = symbolGenerator();

    const array = [value1];

    findAndReplace(array, alwaysFalse, value2);

    expect(array).toEqual([value1]);
  });
});

export {};
