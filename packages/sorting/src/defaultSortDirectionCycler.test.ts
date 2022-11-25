import { defaultSortDirectionCycler } from "./defaultSortDirectionCycler";

describe("sorting.defaultSortDirectionCycler", () => {
  it("should return asc if sortDirection is undefined", () => {
    const result = defaultSortDirectionCycler(undefined);

    expect(result).toEqual("asc");
  });

  it("should return desc if sortDirection is asc", () => {
    const result = defaultSortDirectionCycler("asc");

    expect(result).toEqual("desc");
  });

  it("should return undefined if sortDirection is desc", () => {
    const result = defaultSortDirectionCycler("desc");

    expect(result).toEqual(undefined);
  });
});

export {};
