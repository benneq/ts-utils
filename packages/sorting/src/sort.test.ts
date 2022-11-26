import { Sort } from "./sort";

describe("sorting.sort", () => {
  it("should return an empty Map if no values were provided", () => {
    const sort = new Sort();

    expect([...sort]).toEqual([]);
  });

  it("should return a Map containing the provided values", () => {
    const sort = new Sort([
      ["a", "asc"],
      ["b", "desc"],
    ]);

    expect([...sort]).toEqual([
      ["a", "asc"],
      ["b", "desc"],
    ]);
  });
});

export {};
