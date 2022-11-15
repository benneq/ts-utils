import { get } from "./get";

describe("urlsearchparams.get", () => {
  it("should return all values if no predicate provided", () => {
    const urlSearchParams = new URLSearchParams([
      ["k1", "v1"],
      ["k1", "v2"],
      ["k2", "v3"],
    ]);

    const result = get()(urlSearchParams);

    expectIterableToEqual(result, ["v1", "v2", "v3"]);
  });

  it("should return all values for specified key", () => {
    const urlSearchParams = new URLSearchParams([
      ["k1", "v1"],
      ["k1", "v2"],
      ["k2", "v3"],
    ]);

    const result = get("k2")(urlSearchParams);

    expectIterableToEqual(result, ["v3"]);
  });

  it("should return all values for specified keys", () => {
    const urlSearchParams = new URLSearchParams([
      ["k1", "v1"],
      ["k1", "v2"],
      ["k2", "v3"],
    ]);

    const result = get(["k1", "k2"])(urlSearchParams);

    expectIterableToEqual(result, ["v1", "v2", "v3"]);
  });

  it("should return all values for matching regexp", () => {
    const urlSearchParams = new URLSearchParams([
      ["k1", "v1"],
      ["k1", "v2"],
      ["k2", "v3"],
    ]);

    const result = get(/.2/)(urlSearchParams);

    expectIterableToEqual(result, ["v3"]);
  });

  it("should return all values for matching predicate", () => {
    const urlSearchParams = new URLSearchParams([
      ["k1", "v1"],
      ["k1", "v2"],
      ["k2", "v3"],
    ]);

    const result = get((k) => k === "k2")(urlSearchParams);

    expectIterableToEqual(result, ["v3"]);
  });
});

export {};
