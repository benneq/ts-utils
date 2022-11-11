import { getOrDefault } from "./getOrDefault";

describe("map.getOrDefault", () => {
  it("should return the value if key is present", () => {
    const [key, value] = symbolGenerator();

    const map = new Map<symbol, symbol>([[key, value]]);

    const result = getOrDefault(map)(key, Symbol());

    expect(result).toBe(value);
  });

  it("should return defaultValue if key is absent", () => {
    const map = new Map<symbol, symbol>();
    const [key, value] = symbolGenerator();

    const result = getOrDefault(map)(key, value);

    expect(result).toBe(value);
  });
});

export {};
