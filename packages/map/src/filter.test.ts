import { alwaysFalse, alwaysTrue } from "@benneq/predicate";
import { filter } from "./filter";

describe("map.filter", () => {
  it("should return a new Map", () => {
    const map = new Map();

    expect(filter(alwaysTrue)(map)).not.toBe(map);
    expect(filter(alwaysTrue)(map)).toEqual(new Map());
    expect(filter(alwaysFalse)(map)).not.toBe(map);
    expect(filter(alwaysFalse)(map)).toEqual(new Map());
  });

  it("should only keep entries matching the Predicate", () => {
    const [key1, value1, key2, value2] = symbolGenerator();

    const map = new Map([
      [key1, value1],
      [key2, value2],
    ]);

    expect(filter(([key]) => key === key1)(map)).not.toBe(map);
    expect(filter(([k]) => k === key1)(map)).toEqual(new Map([[key1, value1]]));
    expect(filter(([_key, value]) => value === value2)(map)).not.toBe(map);
    expect(filter(([_key, value]) => value === value2)(map)).toEqual(
      new Map([[key2, value2]])
    );
  });
});

export {};
