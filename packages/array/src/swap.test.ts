import { swap } from "./swap";

describe("array.swap", () => {
  it("should not modify the Array if it is empty", () => {
    const array: unknown[] = [];

    swap(0, 0)(array);
    expect(array).toEqual([]);
  });

  it("should swap the Array elements at the given indexes", () => {
    const [value1, value2, value3] = symbolGenerator();

    const array = [value1, value2, value3];

    swap(1, 2)(array);
    expect(array).toEqual([value1, value3, value2]);
  });

  // it("should work with relative indexes", () => {
  //   const [value1, value2, value3] = symbolGenerator();

  //   const array = [value1, value2, value3];

  //   swap(-1, -3)(array);
  //   expect(array).toEqual([value3, value2, value1]);
  //   swap(1, -1)(array);
  //   expect(array).toEqual([value3, value1, value2]);
  //   swap(-3, -1)(array);
  //   expect(array).toEqual([value2, value1, value3]);
  // });

  it("should not modify the Array if the given indexes are equal", () => {
    const [value1, value2, value3] = symbolGenerator();

    const array = [value1, value2, value3];

    swap(1, 1)(array);
    expect(array).toEqual([value1, value2, value3]);
    // swap(-1, -1)(array);
    // expect(array).toEqual([value1, value2, value3]);
    // swap(-2, 1)(array);
    // expect(array).toEqual([value1, value2, value3]);
    // swap(2, -1)(array);
    // expect(array).toEqual([value1, value2, value3]);
  });

  // it("should not modify the Array if any index is out of bounds", () => {
  //   const [value1, value2] = symbolGenerator();

  //   const array = [value1, value2];

  //   swap(-3, 0)(array);
  //   expect(array).toEqual([value1, value2]);
  //   swap(0, -3)(array);
  //   expect(array).toEqual([value1, value2]);
  //   swap(1, 5)(array);
  //   expect(array).toEqual([value1, value2]);
  //   swap(5, 1)(array);
  //   expect(array).toEqual([value1, value2]);
  // });
});

export {};
