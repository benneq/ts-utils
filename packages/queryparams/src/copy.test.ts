import { copy } from "./copy";

describe("queryparams.copy", () => {
  it("should return a copy of QueryParams", () => {
    const values = ["v1", "v2"];
    const queryParams = new Map([["k", values]]);
    const result = copy(queryParams);

    expect(result).toEqual(queryParams);
    expect(result).not.toBe(queryParams);
  });
});

export {};
