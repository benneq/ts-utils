import { sort } from "./sort";

describe("sorting.sort", () => {
  it("should return an empty Map if no values were provided", () => {
    const result = sort();

    expect(result).toEqual(new Map());
  });

  it("should return a Map containing the provided values", () => {
    const result = sort([
      ["a", "asc"],
      ["b", "desc"],
    ]);

    expect(result).toEqual(
      new Map([
        ["a", "asc"],
        ["b", "desc"],
      ])
    );
  });
});

export {};
