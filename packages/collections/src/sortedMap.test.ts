import { numberComparator } from "@benneq/comparator";
import { SortedMap } from "./sortedMap";
import { SortedSet } from "./sortedSet";

describe("collections.sortedMap", () => {
  describe("constructor", () => {
    it("should create an empty SortedMap", () => {
      const sortedMap = new SortedMap(numberComparator);
      expect(sortedMap.size).toBe(0);
    });

    it("should make values unique and sorted", () => {
      const sortedMap = new SortedMap(numberComparator, [
        [1, 1],
        [0, 0],
        [1, 2],
      ]);
      expect([...sortedMap]).toEqual([
        [0, 0],
        [1, 1],
      ]);
    });
  });

  describe("set", () => {
    it("should add the value at the right position to maintain the sorting", () => {
      const sortedMap = new SortedMap(numberComparator, [
        [0, 0],
        [2, 2],
      ]);

      sortedMap.set(1, 1);

      expect([...sortedMap]).toEqual([
        [0, 0],
        [1, 1],
        [2, 2],
      ]);
    });

    it("should override the value if the SortedMap already contains the key", () => {
      const sortedMap = new SortedMap(numberComparator, [
        [5, 5],
        [4, 4],
      ]);

      sortedMap.set(4, 0);

      expect([...sortedMap]).toEqual([
        [4, 0],
        [5, 5],
      ]);
    });
  });

  describe("setAll", () => {
    it("should set entries at the right position to maintain the sorting", () => {
      const sortedMap = new SortedMap(numberComparator, [
        [0, 0],
        [2, 2],
      ]);

      sortedMap.setAll(
        new SortedMap(numberComparator, [
          [1, 1],
          [2, 2],
          [3, 3],
        ])
      );

      expect([...sortedMap]).toEqual([
        [0, 0],
        [1, 1],
        [2, 2],
        [3, 3],
      ]);
    });

    it("should override the values if the keys already exist", () => {
      const sortedMap = new SortedMap(numberComparator, [
        [0, 0],
        [2, 2],
      ]);

      sortedMap.setAll(
        new SortedMap(numberComparator, [
          [0, 1],
          [2, 3],
        ])
      );

      expect([...sortedMap]).toEqual([
        [0, 1],
        [2, 3],
      ]);
    });

    it("should not modify the SortedMap if entries is empty", () => {
      const sortedMap = new SortedMap(numberComparator, [
        [0, 0],
        [2, 2],
      ]);

      sortedMap.setAll(new SortedMap(numberComparator));

      expect([...sortedMap]).toEqual([
        [0, 0],
        [2, 2],
      ]);
    });
  });

  describe("clear", () => {
    it("should clear the SortedMap", () => {
      const sortedMap = new SortedMap(numberComparator, [[5, 5]]);

      sortedMap.clear();

      expect([...sortedMap]).toEqual([]);
    });
  });

  describe("delete", () => {
    it("should remove the value where comparison result equals 0", () => {
      const sortedMap = new SortedMap(numberComparator, [
        [1, 1],
        [2, 2],
        [3, 3],
      ]);

      sortedMap.delete(2);

      expect([...sortedMap]).toEqual([
        [1, 1],
        [3, 3],
      ]);
    });

    it("should not modify the SortedMap if it does not contain the value", () => {
      const sortedMap = new SortedMap(numberComparator, [
        [1, 1],
        [2, 2],
        [3, 3],
      ]);

      sortedMap.delete(4);

      expect([...sortedMap]).toEqual([
        [1, 1],
        [2, 2],
        [3, 3],
      ]);
    });

    it("should not remove values that are less than the first value of the SortedMap", () => {
      const sortedMap = new SortedMap(numberComparator, [
        [1, 1],
        [2, 2],
        [3, 3],
      ]);

      sortedMap.delete(0);

      expect([...sortedMap]).toEqual([
        [1, 1],
        [2, 2],
        [3, 3],
      ]);
    });
  });

  describe("deleteAll", () => {
    it("should remove the values where comparison result equals 0", () => {
      const sortedMap = new SortedMap(numberComparator, [
        [1, 1],
        [2, 2],
        [3, 3],
      ]);

      sortedMap.deleteAll(new SortedSet(numberComparator, [0, 1]));

      expect([...sortedMap]).toEqual([
        [2, 2],
        [3, 3],
      ]);
    });

    it("should not modify the SortedMap if it does not contain the values", () => {
      const sortedMap = new SortedMap(numberComparator, [
        [1, 1],
        [2, 2],
        [3, 3],
      ]);

      sortedMap.deleteAll(new SortedSet(numberComparator, [4, 5]));

      expect([...sortedMap]).toEqual([
        [1, 1],
        [2, 2],
        [3, 3],
      ]);
    });

    it("should not modify the SortedMap if no values are given", () => {
      const sortedMap = new SortedMap(numberComparator, [
        [1, 1],
        [2, 2],
        [3, 3],
      ]);

      sortedMap.deleteAll(new SortedSet(numberComparator));

      expect([...sortedMap]).toEqual([
        [1, 1],
        [2, 2],
        [3, 3],
      ]);
    });
  });

  describe("has", () => {
    it("should return true if the SortedMap contain the value", () => {
      const sortedMap = new SortedMap(numberComparator, [
        [1, 1],
        [2, 2],
        [3, 3],
      ]);

      const result = sortedMap.has(3);

      expect(result).toBe(true);
    });

    it("should return false if the SortedMap does not contain the value", () => {
      const sortedMap = new SortedMap(numberComparator, [
        [1, 1],
        [2, 2],
        [3, 3],
      ]);

      const result = sortedMap.has(0);

      expect(result).toBe(false);
    });

    it("should return false if value is out of bounds", () => {
      const sortedMap = new SortedMap(numberComparator, [
        [1, 1],
        [2, 2],
        [3, 3],
      ]);

      const result = sortedMap.has(4);

      expect(result).toBe(false);
    });
  });
  describe("hasAll", () => {
    it("should return true if the SortedMap contains all of the values", () => {
      const sortedMap = new SortedMap(numberComparator, [
        [1, 1],
        [2, 2],
        [3, 3],
      ]);

      const result = sortedMap.hasAll(new SortedSet(numberComparator, [2, 3]));

      expect(result).toBe(true);
    });

    it("should return false if the SortedMap does not contain all of the values", () => {
      const sortedMap = new SortedMap(numberComparator, [
        [1, 1],
        [2, 2],
        [3, 3],
      ]);

      const result = sortedMap.hasAll(
        new SortedSet(numberComparator, [0, 1, 3])
      );

      expect(result).toBe(false);
    });

    it("should return true if no values are given", () => {
      const sortedMap = new SortedMap(numberComparator, [
        [1, 1],
        [2, 2],
        [3, 3],
      ]);

      const result = sortedMap.hasAll(new SortedSet(numberComparator));

      expect(result).toBe(true);
    });
  });

  describe("size", () => {
    it("should return the size", () => {
      const sortedMap = new SortedMap(numberComparator, [
        [1, 2],
        [3, 4],
      ]);

      expect(sortedMap.size).toBe(2);
    });
  });

  describe("entries", () => {
    it("should yield all entries in order", () => {
      const sortedMap = new SortedMap(numberComparator, [
        [1, 2],
        [3, 4],
      ]);

      expect([...sortedMap.entries()]).toEqual([
        [1, 2],
        [3, 4],
      ]);
    });
  });

  describe("Symbol.toStringTag", () => {
    it("should return SortedMap", () => {
      const sortedMap = new SortedMap(numberComparator);

      expect(sortedMap[Symbol.toStringTag]).toEqual("SortedMap");
    });
  });
});

export {};
