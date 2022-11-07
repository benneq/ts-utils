import { fromMixedObject } from "./fromMixedObject";

describe("queryparams.fromURLSearchParams", () => {
  it("should return the same entries", () => {
    const mixedObject = {
      k1: "v1",
      k2: null,
      k3: undefined,
      k4: ["v2", "v3"],
    };
    const result = fromMixedObject(mixedObject);

    expect(result).toEqual(
      new Map([
        ["k1", ["v1"]],
        ["k4", ["v2", "v3"]],
      ])
    );
  });
});

export {};
