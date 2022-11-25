import { numberComparator } from "@benneq/comparator";
import { SortedSet } from "./sortedSet";

describe("sortedset.sortedSet", () => {
  describe("constructor", () => {
    it("should create an empty SortedSet", () => {
      const sortedSet = new SortedSet(numberComparator);
      expect(sortedSet.size).toBe(0);
    });
  });

  describe("add", () => {
    it("should add values at the right position to maintain the sorting", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(0);
      sortedSet.add(2);

      sortedSet.add(1, 2, 3);

      expect([...sortedSet.values()]).toEqual([0, 1, 2, 3]);
    });

    it("should not modify the sorted set if it already contains all values", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(5);
      sortedSet.add(4);

      sortedSet.add(4, 5);

      expect([...sortedSet.values()]).toEqual([4, 5]);
    });

    it("should not modify the sorted set if values array is empty", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(5);
      sortedSet.add(4);

      sortedSet.add();

      expect([...sortedSet.values()]).toEqual([4, 5]);
    });
  });

  describe("clear", () => {
    it("should clear the sorted set", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(5);

      sortedSet.clear();

      expect([...sortedSet.values()]).toEqual([]);
    });
  });

  describe("delete", () => {
    it("should remove values where comparison result equals 0", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(1, 2, 3, 4, 5);

      sortedSet.delete(1, 2, 5);

      expect([...sortedSet.values()]).toEqual([3, 4]);
    });

    it("should not remove values that are less than the first value of the sorted set", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(1, 2);

      sortedSet.delete(0, 1);

      expect([...sortedSet.values()]).toEqual([2]);
    });

    it("should not modify the sorted set if it does not contain the values", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(1, 2);

      sortedSet.delete(4, 5);

      expect([...sortedSet.values()]).toEqual([1, 2]);
    });

    it("should not modify the sorted set if values array is empty", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(1, 2);

      sortedSet.delete();

      expect([...sortedSet.values()]).toEqual([1, 2]);
    });
  });

  describe("forEach", () => {
    it("should call the callback for each element in sorted order", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(1, 2);

      const callback = jest.fn();
      sortedSet.forEach(callback);

      expect(callback).toHaveBeenNthCalledWith(1, 1, 1, sortedSet);
      expect(callback).toHaveBeenNthCalledWith(2, 2, 2, sortedSet);
      expect(callback).toHaveBeenCalledTimes(2);
    });
  });

  describe("has", () => {
    it("should return true if the sorted set contains all of the values", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(1, 2, 3, 4, 5);

      const result = sortedSet.has(1, 3, 5);

      expect(result).toBe(true);
    });

    it("should return false if the sorted set does not contain all of the values", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(1, 2);

      const result = sortedSet.has(0, 1, 3);

      expect(result).toBe(false);
    });

    it("should return true if no values are given", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(1, 2, 3);

      const result = sortedSet.has();

      expect(result).toBe(true);
    });
  });

  describe("entries", () => {
    it("should yield all values in order as entries", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(1, 2);

      expect([...sortedSet.entries()]).toEqual([
        [1, 1],
        [2, 2],
      ]);
    });
  });

  describe("keys", () => {
    it("should yield all values in order", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(1, 2);

      expect([...sortedSet.keys()]).toEqual([1, 2]);
    });
  });

  describe("values", () => {
    it("should yield all values in order", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(1, 2);

      expect([...sortedSet.values()]).toEqual([1, 2]);
    });
  });

  describe("Symbol.iterator", () => {
    it("should yield all values in order", () => {
      const sortedSet = new SortedSet(numberComparator);
      sortedSet.add(1, 2);

      expect([...sortedSet[Symbol.iterator]()]).toEqual([1, 2]);
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
