import { alwaysFalse, alwaysTrue } from "@benneq/predicate";
import { pushIf } from "./pushIf";

describe("array.pushIf", () => {
  it("should push the values if predicate does match", () => {
    const [value1, value2, value3] = symbolGenerator();

    const array = [value1];

    pushIf(array, alwaysTrue, value2, value3);

    expect(array).toEqual([value1, value2, value3]);
  });

  it("should push the values if the array contains the predicate value", () => {
    const [value1, value2] = symbolGenerator();

    const array = [value1];

    pushIf(array, value1, value2);

    expect(array).toEqual([value1, value2]);
  });

  it("should not modify the Array if the predicate does not match", () => {
    const [value1, value2] = symbolGenerator();

    const array = [value1];

    pushIf(array, alwaysFalse, value2);

    expect(array).toEqual([value1]);
  });
});

export {};
