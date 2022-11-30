import { alwaysFalse, alwaysTrue } from "@benneq/predicate";
import { findAndDelete } from "./findAndDelete";

describe("array.findAndDelete", () => {
  it("should replace the first element that matches the predicate", () => {
    const [value1, value2] = symbolGenerator();

    const array = [value1, value2];

    findAndDelete(alwaysTrue)(array);

    expect(array).toEqual([value2]);
  });

  it("should not modify the Array if predicate does not match", () => {
    const [value1] = symbolGenerator();

    const array = [value1];

    findAndDelete(alwaysFalse)(array);

    expect(array).toEqual([value1]);
  });
});

export {};
