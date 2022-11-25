import { defaultSortDirectionCycler } from "./defaultSortDirectionCycler";
import { sort } from "./sort";
import { toggle } from "./toggle";

describe("sorting.toggle", () => {
  it("should append property if it does not exist", () => {
    const s = sort([["a", "asc"]]);

    toggle(defaultSortDirectionCycler)<string>("b")(s);

    expect([...s]).toEqual([
      ["a", "asc"],
      ["b", "asc"],
    ]);
  });

  it("should toggle property and append it if it does already exist", () => {
    const s = sort([
      ["a", "asc"],
      ["b", "asc"],
    ]);

    toggle(defaultSortDirectionCycler)<string>("a")(s);

    expect([...s]).toEqual([
      ["b", "asc"],
      ["a", "desc"],
    ]);
  });

  it("should clear if clear is true", () => {
    const s = sort([
      ["a", "asc"],
      ["b", "asc"],
    ]);

    toggle(defaultSortDirectionCycler)<string>("a", true)(s);

    expect([...s]).toEqual([["a", "desc"]]);
  });
});

export {};
