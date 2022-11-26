import { numberComparator } from "@benneq/comparator";
import { OpenRange } from "./openRange";

describe("range.openRange", () => {
  it("should not contain from", () => {
    const range = new OpenRange(numberComparator, 1, 3);

    expect(range.contains(1)).toBe(false);
  });

  it("should not contain to", () => {
    const range = new OpenRange(numberComparator, 1, 3);

    expect(range.contains(3)).toBe(false);
  });

  it("should contain values between from and to", () => {
    const range = new OpenRange<number>(numberComparator, 1, 3);

    expect(range.contains(2)).toBe(true);
  });
});

export {};
