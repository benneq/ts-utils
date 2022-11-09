import { computeIfAbsent } from "./computeIfAbsent";

describe("map.computeIfAbsent", () => {
  it("should not modify the map if it already contains the key", () => {
    const key = Symbol();
    const value = Symbol();
    const map = new Map<symbol, symbol>([[key, value]]);

    computeIfAbsent(map)(key, (_key) => Symbol());

    expect(map).toEqual(new Map([[key, value]]));
  });

  it("should add the computed key-value pair if the Map did not contain the key", () => {
    const map = new Map<symbol, symbol>();
    const key = Symbol();
    const value = Symbol();

    computeIfAbsent(map)(key, (_key) => value);

    expect(map).toEqual(new Map([[key, value]]));
  });
});

export {};
