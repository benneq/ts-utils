import { replace } from "./replace";

describe("map.setIfAbsent", () => {
  it("should not modify the map if does not contain the key", () => {
    const [key, value] = symbolGenerator();

    const map = new Map<symbol, symbol>([[key, value]]);

    replace(map)(Symbol(), Symbol());
    replace(map)(Symbol(), Symbol(), Symbol());

    expect(map).toEqual(new Map([[key, value]]));
  });

  it("should not modify the map if oldValue and current value don't match", () => {
    const [key, value] = symbolGenerator();

    const map = new Map<symbol, symbol>([[key, value]]);

    replace(map)(key, Symbol(), Symbol());

    expect(map).toEqual(new Map([[key, value]]));
  });

  it("should replace the value if no oldValue provided", () => {
    const [key, value] = symbolGenerator();

    const map = new Map<symbol, symbol>([[key, Symbol()]]);

    replace(map)(key, value);

    expect(map).toEqual(new Map([[key, value]]));
  });

  it("should replace the value if no oldValue matches current value", () => {
    const [key, oldValue] = symbolGenerator();

    const map = new Map<symbol, symbol>([[key, oldValue]]);

    const newValue = Symbol();
    replace(map)(key, oldValue, newValue);

    expect(map).toEqual(new Map([[key, newValue]]));
  });
});

export {};
