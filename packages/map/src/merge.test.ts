import { merge } from "./merge";

describe("map.merge", () => {
  it("should call remapping function with the old value and provided value", () => {
    const [key, value1, value2] = symbolGenerator();

    const map = new Map<symbol, symbol>([[key, value1]]);
    const remappingFunction = jest.fn();

    merge(map)(key, value2, remappingFunction);

    expect(remappingFunction).toHaveBeenNthCalledWith(1, value1, value2);
    expect(remappingFunction).toHaveBeenCalledTimes(1);
  });

  it("should remove entry if remappingFunction returns undefined", () => {
    const [key1, value1, key2, value2] = symbolGenerator();

    const map = new Map<symbol, symbol>([
      [key1, value1],
      [key2, value2],
    ]);

    merge(map)(key1, value1, () => undefined);

    expect(map).toEqual(new Map([[key2, value2]]));
  });

  it("should set the result of the remappingFunction if key does exist", () => {
    const [key, value1, value2, value3] = symbolGenerator();

    const map = new Map<symbol, symbol>([[key, value1]]);

    merge(map)(key, value2, () => value3);

    expect(map).toEqual(new Map([[key, value3]]));
  });

  it("should set value if key does not exist", () => {
    const map = new Map<symbol, symbol>();
    const [key, value] = symbolGenerator();

    merge(map)(key, value, () => Symbol());

    expect(map).toEqual(new Map([[key, value]]));
  });
});

export {};
