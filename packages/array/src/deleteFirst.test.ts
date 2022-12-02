import { alwaysTrue } from "@benneq/predicate";
import { deleteIf } from "./deleteIf";

describe("array.deleteFirst", () => {
  it("should remove the first Array element that matches the predicate", () => {
    const [value] = symbolGenerator();

    const array = [value, value];

    deleteIf((e) => e === value)(array);

    expect(array).toEqual([value]);
  });

  it("should not modify the Array if it is empty", () => {
    const array: unknown[] = [];

    deleteIf(alwaysTrue)(array);

    expect(array).toEqual([]);
  });
});

export {};
