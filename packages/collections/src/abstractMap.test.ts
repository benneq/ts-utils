import { numberComparator } from "@benneq/comparator";
import { IndexedSet } from "./indexedSet";
import { SortedMap } from "./sortedMap";

describe("collections.abstractMap", () => {
  describe("constructor", () => {
    it("should create an empty IndexedSet", () => {
      const map = new SortedMap(numberComparator);
      expect(map.size).toBe(0);
    });
  });

  describe("forEach", () => {
    it("should call the callback for each element in sorted order", () => {
      const map = new SortedMap(numberComparator, [
        [1, 2],
        [3, 4],
      ]);

      const callback = jest.fn();
      map.forEach(callback);

      expect(callback).toHaveBeenNthCalledWith(1, 2, 1, map);
      expect(callback).toHaveBeenNthCalledWith(2, 4, 3, map);
      expect(callback).toHaveBeenCalledTimes(2);
    });
  });

  describe("values", () => {
    it("should yield all values in order as entries", () => {
      const map = new SortedMap(numberComparator, [
        [1, 2],
        [3, 4],
      ]);

      expect([...map.values()]).toEqual([2, 4]);
    });
  });

  describe("keys", () => {
    it("should yield all values in order", () => {
      const map = new SortedMap(numberComparator, [
        [1, 2],
        [3, 4],
      ]);

      expect([...map.keys()]).toEqual([1, 3]);
    });
  });

  describe("Symbol.iterator", () => {
    it("should yield all values in order", () => {
      const map = new SortedMap(numberComparator, [
        [1, 2],
        [3, 4],
      ]);

      expect([...map[Symbol.iterator]()]).toEqual([
        [1, 2],
        [3, 4],
      ]);
    });
  });
});

export {};
