import { alwaysFalse, alwaysTrue } from "@benneq/predicate";
import { findAndReplace } from "./findAndReplace";

describe("array.findAndReplace", () => {
  it("should replace the first element that matches the predicate", () => {
    const [value1, value2, value3] = symbolGenerator();

    const array = [value1, value2];

    findAndReplace(alwaysTrue, value3)(array);

    expect(array).toEqual([value3, value2]);
  });

  it("should not modify the Array if predicate does not match", () => {
    const [value1, value2] = symbolGenerator();

    const array = [value1];

    findAndReplace(alwaysFalse, value2)(array);

    expect(array).toEqual([value1]);
  });
});

export {};
