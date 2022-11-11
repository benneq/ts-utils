import { mapper } from "./mapper";

describe("object.mapper", () => {
  it("should map function", () => {
    const initialValue = Symbol();
    const value = Symbol();
    const fn = jest.fn(() => value);

    const result = mapper(fn)(initialValue);

    expect(result).toBe(value);
    expect(fn).toHaveBeenNthCalledWith(1, initialValue);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should map object", () => {
    const initialValue = Symbol();
    const value1 = Symbol();
    const fn1 = jest.fn(() => value1);
    const value2 = Symbol();
    const fn2 = jest.fn(() => value2);

    const result = mapper({
      key1: fn1,
      key2: [fn2] as const,
    })(initialValue);

    expect(result).toEqual({ key1: value1, key2: [value2] });
    expect(fn1).toHaveBeenNthCalledWith(1, initialValue);
    expect(fn2).toHaveBeenNthCalledWith(1, initialValue);
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(1);
  });

  it("should map array", () => {
    const initialValue = Symbol();
    const value1 = Symbol();
    const fn1 = jest.fn(() => value1);
    const value2 = Symbol();
    const fn2 = jest.fn(() => value2);

    const result = mapper([fn1, { key: fn2 }] as const)(initialValue);

    expect(result).toEqual([value1, { key: value2 }]);
    expect(fn1).toHaveBeenNthCalledWith(1, initialValue);
    expect(fn2).toHaveBeenNthCalledWith(1, initialValue);
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(1);
  });
});

export {};
