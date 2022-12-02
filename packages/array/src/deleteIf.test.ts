import { alwaysTrue } from "@benneq/predicate";
import { deleteIf } from "./deleteIf";

describe("array.removeIf", () => {
  it("should remove the Array element that matches the predicate", () => {
    const [value1, value2] = symbolGenerator();

    const array = [value1, value2];

    deleteIf((e) => e === value2)(array);

    expect(array).toEqual([value1]);
  });

  it("should not modify the Array if it is empty", () => {
    const array: unknown[] = [];

    deleteIf(alwaysTrue)(array);

    expect(array).toEqual([]);
  });
});

export {};
