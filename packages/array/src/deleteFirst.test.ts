import { alwaysTrue } from "@benneq/predicate";
import { deleteIf } from "./deleteIf";

describe("array.deleteFirst", () => {
  it("should remove the first Array element that matches the predicate", () => {
    const value = Symbol();
    const array = [value, value];

    deleteIf(array, (e) => e === value);

    expect(array).toEqual([value]);
  });

  it("should not modify the Array if it is empty", () => {
    const array: unknown[] = [];

    deleteIf(array, alwaysTrue);

    expect(array).toEqual([]);
  });
});

export {};
