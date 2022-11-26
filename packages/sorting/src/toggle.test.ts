import { defaultSortDirectionCycler } from "./defaultSortDirectionCycler";
import { Sort } from "./sort";
import { toggle } from "./toggle";

describe("sorting.toggle", () => {
  it("should append property if it does not exist", () => {
    const sort = new Sort([["a", "asc"]]);

    toggle(defaultSortDirectionCycler)<string>("b")(sort);

    expect([...sort]).toEqual([
      ["a", "asc"],
      ["b", "asc"],
    ]);
  });

  it("should toggle property and append it if it does already exist", () => {
    const sort = new Sort([
      ["a", "asc"],
      ["b", "asc"],
    ]);

    toggle(defaultSortDirectionCycler)<string>("a")(sort);

    expect([...sort]).toEqual([
      ["b", "asc"],
      ["a", "desc"],
    ]);
  });

  it("should clear if clear is true", () => {
    const sort = new Sort([
      ["a", "asc"],
      ["b", "asc"],
    ]);

    toggle(defaultSortDirectionCycler)<string>("a", true)(sort);

    expect([...sort]).toEqual([["a", "desc"]]);
  });
});

export {};
