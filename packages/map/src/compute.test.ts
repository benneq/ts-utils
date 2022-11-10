import { compute } from "./compute";

describe("map.compute", () => {
  it("should call remapping function with the current key and value", () => {
    const key = Symbol();
    const value = Symbol();
    const map = new Map<symbol, symbol>([[key, value]]);
    const remappingFunction = jest.fn();

    compute(map)(key, remappingFunction);

    expect(remappingFunction).toHaveBeenNthCalledWith(1, key, value);
    expect(remappingFunction).toHaveBeenCalledTimes(1);
  });

  it("should remove entry if remappingFunction returns undefined", () => {
    const key = Symbol();
    const value = Symbol();
    const map = new Map<symbol, symbol>([[key, value]]);

    compute(map)(key, () => undefined);

    expect(map).toEqual(new Map());
  });

  it("should set value if remappingFunction returns non-undefined", () => {
    const key = Symbol();
    const map = new Map<symbol, symbol>([[key, Symbol()]]);

    const value = Symbol();
    compute(map)(key, () => value);

    expect(map).toEqual(new Map([[key, value]]));
  });
});

export {};
