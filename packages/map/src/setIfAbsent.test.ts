import { setIfAbsent } from "./setIfAbsent";

describe("map.setIfAbsent", () => {
  it("should not modify the map if it already contains the key", () => {
    const key = Symbol();
    const value = Symbol();
    const map = new Map<symbol, symbol>([[key, value]]);

    setIfAbsent(map)(key, Symbol());

    expect(map).toEqual(new Map([[key, value]]));
  });

  it("should add the key-value pair if the Map did not contain the key", () => {
    const map = new Map<symbol, symbol>();
    const key = Symbol();
    const value = Symbol();

    setIfAbsent(map)(key, value);

    expect(map).toEqual(new Map([[key, value]]));
  });
});

export {};
