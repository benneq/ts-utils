import { sanitize } from "./sanitize";

describe("queryparams.sanitize", () => {
  it("should return a sanitized copy of QueryParams", () => {
    const queryParams = new Map([
      [" k ", ["v1", ""]],
      ["", ["v2", "v3"]],
    ]);
    const result = sanitize(
      (key) => key.trim() || undefined,
      (value) => value.trim() || undefined
    )(queryParams);

    expect(result).toEqual(new Map([["k", ["v1"]]]));
    expect(result).not.toBe(queryParams);
  });
});

export {};
