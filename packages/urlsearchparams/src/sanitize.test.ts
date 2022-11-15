import { sanitize } from "./sanitize";

describe("urlsearchparams.sanitize", () => {
  it("should return a sanitized copy of URLSearchParams", () => {
    const urlSearchParams = new URLSearchParams([
      [" k ", "v1"],
      ["k ", ""],
      ["", "v2"],
      [" ", "v3"],
    ]);

    const result = sanitize(
      (key) => key.trim() || undefined,
      (value) => value.trim() || undefined
    )(urlSearchParams);

    expect(result).toEqual(new URLSearchParams([["k", "v1"]]));
    expect(result).not.toBe(urlSearchParams);
  });
});

export {};
