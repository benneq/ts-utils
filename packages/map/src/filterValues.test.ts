import { alwaysFalse, alwaysTrue } from "@benneq/predicate";
import { filterValues } from "./filterValues";

describe("map.filterValues", () => {
  it("should return a new Map", () => {
    const map = new Map();

    expect(filterValues(alwaysTrue)(map)).not.toBe(map);
    expect(filterValues(alwaysTrue)(map)).toEqual(new Map());
    expect(filterValues(alwaysFalse)(map)).not.toBe(map);
    expect(filterValues(alwaysFalse)(map)).toEqual(new Map());
  });

  it("should only keep entries matching the Predicate", () => {
    const [key1, value1, key2, value2] = symbolGenerator();

    const map = new Map([
      [key1, value1],
      [key2, value2],
    ]);

    expect(filterValues((value) => value === value2)(map)).not.toBe(map);
    expect(filterValues((value) => value === value2)(map)).toEqual(
      new Map([[key2, value2]])
    );
  });
});

export {};
