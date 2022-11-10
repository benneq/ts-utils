import { computeIfPresent } from "./computeIfPresent";

describe("map.computeIfPresent", () => {
  it("should not modify the map if it does not contain the key", () => {
    const key = Symbol();
    const value = Symbol();
    const map = new Map<symbol, symbol>([[key, value]]);

    computeIfPresent(map)(Symbol(), () => Symbol());

    expect(map).toEqual(new Map([[key, value]]));
  });

  it("should remove the entry if remapping function returned undefined", () => {
    const key = Symbol();
    const value = Symbol();
    const map = new Map<symbol, symbol>([[key, value]]);

    computeIfPresent(map)(key, () => undefined);

    expect(map).toEqual(new Map());
  });

  it("should override the value if remapping function returned non-undefined", () => {
    const key = Symbol();
    const map = new Map<symbol, symbol>([[key, Symbol()]]);

    const value = Symbol();
    computeIfPresent(map)(key, () => value);

    expect(map).toEqual(new Map([[key, value]]));
  });
});

export {};
