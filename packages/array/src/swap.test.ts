import { swap } from "./swap";

describe("array.swap", () => {
  it("should not modify the Array if it is empty", () => {
    const array: unknown[] = [];

    swap(array, 0, 0);
    expect(array).toEqual([]);
  });

  it("should swap the Array elements at the given indexes", () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    const array = [value1, value2, value3];

    swap(array, 1, 2);
    expect(array).toEqual([value1, value3, value2]);
  });

  it("should work with relative indexes", () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    const array = [value1, value2, value3];

    swap(array, -1, -3);
    expect(array).toEqual([value3, value2, value1]);
    swap(array, 1, -1);
    expect(array).toEqual([value3, value1, value2]);
    swap(array, -3, -1);
    expect(array).toEqual([value2, value1, value3]);
  });

  it("should not modify the Array if the given indexes are equal", () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const value3 = Symbol();
    const array = [value1, value2, value3];

    swap(array, 1, 1);
    expect(array).toEqual([value1, value2, value3]);
    swap(array, -1, -1);
    expect(array).toEqual([value1, value2, value3]);
    swap(array, -2, 1);
    expect(array).toEqual([value1, value2, value3]);
    swap(array, 2, -1);
    expect(array).toEqual([value1, value2, value3]);
  });

  it("should not modify the Array if any index is out of bounds", () => {
    const value1 = Symbol();
    const value2 = Symbol();
    const array = [value1, value2];

    swap(array, -3, 0);
    expect(array).toEqual([value1, value2]);
    swap(array, 0, -3);
    expect(array).toEqual([value1, value2]);
    swap(array, 1, 5);
    expect(array).toEqual([value1, value2]);
    swap(array, 5, 1);
    expect(array).toEqual([value1, value2]);
  });
});

export {};
