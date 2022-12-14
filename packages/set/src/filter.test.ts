import { alwaysFalse, alwaysTrue } from "@benneq/predicate";
import { filter } from "./filter";

describe("set.filter", () => {
  it("should return a new Set if the given Set was empty", () => {
    const set = new Set();

    expect(filter(alwaysTrue)(set)).not.toBe(set);
    expect(filter(alwaysTrue)(set)).toEqual(new Set());

    expect(filter(alwaysFalse)(set)).not.toBe(set);
    expect(filter(alwaysFalse)(set)).toEqual(new Set());
  });

  it("should return a new Set with only the elements from the given Set that match the Predicate", () => {
    const [value1, value2, value3] = symbolGenerator();

    const set = new Set([value1, value2, value3]);

    expect(filter((e) => e === value2)(set)).not.toBe(set);
    expect(filter((e) => e === value2)(set)).toEqual(new Set([value2]));

    expect(filter((e) => e !== value2)(set)).not.toBe(set);
    expect(filter((e) => e !== value2)(set)).toEqual(new Set([value1, value3]));
  });
});

export {};
