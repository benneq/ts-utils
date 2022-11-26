import { mapTuple } from "./mapTuple";

describe("array.mapTuple", () => {
  it("should return the mapped tuple", () => {
    const [value1, value2, value3, value4] = symbolGenerator();

    const result = mapTuple([() => value3, () => value4])([value1, value2]);

    expect(result).toEqual([value3, value4]);
  });

  it("should call each mapper once", () => {
    const [value1, value2] = symbolGenerator();
    const mapper1 = jest.fn();
    const mapper2 = jest.fn();

    mapTuple([mapper1, mapper2])([value1, value2]);

    expect(mapper1).toHaveBeenNthCalledWith(1, value1);
    expect(mapper2).toHaveBeenNthCalledWith(1, value2);
    expect(mapper1).toHaveBeenCalledTimes(1);
    expect(mapper2).toHaveBeenCalledTimes(1);
  });
});

export {};
