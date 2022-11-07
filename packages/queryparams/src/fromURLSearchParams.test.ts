import { fromURLSearchParams } from "./fromURLSearchParams";

describe("queryparams.fromURLSearchParams", () => {
  it("should return the same entries", () => {
    const urlSearchParams = new URLSearchParams([
      ["k1", "v1"],
      ["k1", "v2"],
    ]);
    const result = fromURLSearchParams(urlSearchParams);

    expect(result).toEqual(new Map([["k1", ["v1", "v2"]]]));
  });
});

export {};
