import { numberComparator } from "@benneq/comparator";
import { SortedSet } from "./sortedSet";

describe("collections.sortedSet", () => {
  describe("constructor", () => {
    it("should create an empty SortedSet", () => {
      const sortedSet = new SortedSet(numberComparator);
      expect(sortedSet.size).toBe(0);
    });

    it("should make values unique and sorted", () => {
      const sortedSet = new SortedSet(numberComparator, [3, 1, 3, 2, 2]);
      expect([...sortedSet]).toEqual([1, 2, 3]);
    });
  });

  describe("add", () => {
    it("should add the value at the right position to maintain the sorting", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(0);
      sortedSet.add(2);

      sortedSet.add(1);

      expect([...sortedSet]).toEqual([0, 1, 2]);
    });

    it("should not modify the SortedSet if it already contains the value", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(5);
      sortedSet.add(4);

      sortedSet.add(4);

      expect([...sortedSet]).toEqual([4, 5]);
    });

    it("should add values at the right position to maintain the sorting", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(0);
      sortedSet.add(2);

      sortedSet.add(new SortedSet(numberComparator, [1, 2, 3]));

      expect([...sortedSet]).toEqual([0, 1, 2, 3]);
    });

    it("should not modify the SortedSet if it already contains all values", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(5);
      sortedSet.add(4);

      sortedSet.add(new SortedSet(numberComparator, [4, 5]));

      expect([...sortedSet]).toEqual([4, 5]);
    });

    it("should not modify the SortedSet if values array is empty", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(5);
      sortedSet.add(4);

      sortedSet.add(new SortedSet(numberComparator));

      expect([...sortedSet]).toEqual([4, 5]);
    });
  });

  describe("clear", () => {
    it("should clear the SortedSet", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(5);

      sortedSet.clear();

      expect([...sortedSet]).toEqual([]);
    });
  });

  describe("delete", () => {
    it("should remove the value where comparison result equals 0", () => {
      const sortedSet = new SortedSet(numberComparator, [1, 2, 3, 4, 5]);

      sortedSet.delete(2);

      expect([...sortedSet]).toEqual([1, 3, 4, 5]);
    });

    it("should not modify the SortedSet if it does not contain the value", () => {
      const sortedSet = new SortedSet(numberComparator, [1, 2]);

      sortedSet.delete(4);

      expect([...sortedSet]).toEqual([1, 2]);
    });

    it("should not remove values that are less than the first value of the SortedSet", () => {
      const sortedSet = new SortedSet(numberComparator, [1, 2]);

      sortedSet.delete(0);

      expect([...sortedSet]).toEqual([1, 2]);
    });

    it("should remove the values where comparison result equals 0", () => {
      const sortedSet = new SortedSet(numberComparator, [1, 2, 3, 4, 5]);

      sortedSet.delete(new SortedSet(numberComparator, [0, 2, 5]));

      expect([...sortedSet]).toEqual([1, 3, 4]);
    });

    it("should not modify the SortedSet if it does not contain the values", () => {
      const sortedSet = new SortedSet(numberComparator, [1, 2]);

      sortedSet.delete(new SortedSet(numberComparator, [4, 5]));

      expect([...sortedSet]).toEqual([1, 2]);
    });

    it("should not modify the SortedSet if no values are given", () => {
      const sortedSet = new SortedSet(numberComparator, [1, 2]);

      sortedSet.delete(new SortedSet(numberComparator));

      expect([...sortedSet]).toEqual([1, 2]);
    });
  });

  describe("has", () => {
    it("should return true if the SortedSet contain the value", () => {
      const sortedSet = new SortedSet(numberComparator, [1, 2, 3, 4, 5]);

      const result = sortedSet.has(5);

      expect(result).toBe(true);
    });

    it("should return false if the SortedSet does not contain the value", () => {
      const sortedSet = new SortedSet(numberComparator, [1, 2]);

      const result = sortedSet.has(0);

      expect(result).toBe(false);
    });

    it("should return true if the SortedSet contains all of the values", () => {
      const sortedSet = new SortedSet(numberComparator, [1, 2, 3, 4, 5]);

      const result = sortedSet.has(new SortedSet(numberComparator, [1, 3, 5]));

      expect(result).toBe(true);
    });

    it("should return false if the SortedSet does not contain all of the values", () => {
      const sortedSet = new SortedSet(numberComparator, [1, 2]);

      const result = sortedSet.has(new SortedSet(numberComparator, [0, 1, 3]));

      expect(result).toBe(false);
    });

    it("should return true if no values are given", () => {
      const sortedSet = new SortedSet(numberComparator, [1, 2, 3]);

      const result = sortedSet.has(new SortedSet(numberComparator));

      expect(result).toBe(true);
    });
  });

  describe("values", () => {
    it("should yield all values in order", () => {
      const sortedSet = new SortedSet(numberComparator, [1, 2]);

      expect([...sortedSet]).toEqual([1, 2]);
    });
  });

  describe("Symbol.toStringTag", () => {
    it("should return SortedSet", () => {
      const sortedSet = new SortedSet(numberComparator);

      expect(sortedSet[Symbol.toStringTag]).toEqual("SortedSet");
    });
  });
});

export {};
