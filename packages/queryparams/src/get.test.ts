import { get } from "./get";

describe("queryparams.get", () => {
  it("should return all values if no predicate provided", () => {
    const queryParams = new Map([
      ["k1", ["v1", "v2"]],
      ["k2", ["v3"]],
    ]);

    const result = get()(queryParams);

    expect(result).toEqual(["v1", "v2", "v3"]);
  });

  it("should return all values for specified key", () => {
    const queryParams = new Map([
      ["k1", ["v1", "v2"]],
      ["k2", ["v3"]],
    ]);

    const result = get("k2")(queryParams);

    expect(result).toEqual(["v3"]);
  });

  it("should return all values for specified keys", () => {
    const queryParams = new Map([
      ["k1", ["v1", "v2"]],
      ["k2", ["v3"]],
    ]);

    const result = get(["k1", "k2"])(queryParams);

    expect(result).toEqual(["v1", "v2", "v3"]);
  });

  it("should return all values for matching regexp", () => {
    const queryParams = new Map([
      ["k1", ["v1", "v2"]],
      ["k2", ["v3"]],
    ]);

    const result = get(/.2/)(queryParams);

    expect(result).toEqual(["v3"]);
  });

  it("should return all values for matching predicate", () => {
    const queryParams = new Map([
      ["k1", ["v1", "v2"]],
      ["k2", ["v3"]],
    ]);

    const result = get((k) => k === "k2")(queryParams);

    expect(result).toEqual(["v3"]);
  });
});

export {};
