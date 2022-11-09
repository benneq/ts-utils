import { copy } from "./copy";

describe("multimap.copy", () => {
  it("should return a copy of MultiMap", () => {
    const values = ["v1", "v2"];
    const multiMap = new Map([["k", values]]);
    const result = copy(multiMap);

    expect(result).toEqual(multiMap);
    expect(result).not.toBe(multiMap);
  });
});

export {};
