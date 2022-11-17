import { pipe } from "@benneq/function";
import { map } from "@benneq/iterable";
import { mapper } from "./mapper";

describe("object.mapper", () => {
  it("should map function", () => {
    const [initialValue, value] = symbolGenerator();

    const fn = jest.fn(() => value);

    const result = mapper(fn)(initialValue);

    expect(result).toBe(value);
    expect(fn).toHaveBeenNthCalledWith(1, initialValue);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("should map object", () => {
    const [initialValue, value1, value2, value3] = symbolGenerator();
    const fn1 = jest.fn(() => value1);
    const fn2 = jest.fn(() => value2);
    const fn3 = jest.fn(() => value3);

    const result = mapper({
      key1: fn1,
      key2: [fn2] as const,
      key3: { key4: fn3 },
    })(initialValue);

    expect(result).toEqual({
      key1: value1,
      key2: [value2],
      key3: { key4: value3 },
    });
    expect(fn1).toHaveBeenNthCalledWith(1, initialValue);
    expect(fn2).toHaveBeenNthCalledWith(1, initialValue);
    expect(fn3).toHaveBeenNthCalledWith(1, initialValue);
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(1);
    expect(fn3).toHaveBeenCalledTimes(1);
  });

  it("should map array", () => {
    const [initialValue, value1, value2, value3] = symbolGenerator();
    const fn1 = jest.fn(() => value1);
    const fn2 = jest.fn(() => value2);
    const fn3 = jest.fn(() => value3);

    const result = mapper([fn1, { key: fn2 }, [fn3]] as const)(initialValue);

    expect(result).toEqual([value1, { key: value2 }, [value3]]);
    expect(fn1).toHaveBeenNthCalledWith(1, initialValue);
    expect(fn2).toHaveBeenNthCalledWith(1, initialValue);
    expect(fn3).toHaveBeenNthCalledWith(1, initialValue);
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(1);
    expect(fn3).toHaveBeenCalledTimes(1);
  });

  it("should work with nested mappers", () => {
    const nestedMapper = mapper<{ x: number; y: number }, [number, number]>([
      (v) => v.x,
      (v) => v.y,
    ]);

    const result = mapper<any, any>({
      a: (v) => v.a.toUpperCase(),
      b: (v) => nestedMapper(v.b),
    })({ a: "a", b: { x: 1, y: 2 } });

    expect(result).toEqual({ a: "A", b: [1, 2] });
  });
});

export {};
