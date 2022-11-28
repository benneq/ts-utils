import { IndexedSet } from "./indexedSet";

describe("collections.indexedSet", () => {
  describe("constructor", () => {
    it("should create an empty IndexedSet", () => {
      const indexedSet = new IndexedSet();
      expect(indexedSet.size).toBe(0);
    });
  });

  describe("forEach", () => {
    it("should call the callback for each element in sorted order", () => {
      const indexedSet = new IndexedSet([1, 2]);

      const callback = jest.fn();
      indexedSet.forEach(callback);

      expect(callback).toHaveBeenNthCalledWith(1, 1, 1, indexedSet);
      expect(callback).toHaveBeenNthCalledWith(2, 2, 2, indexedSet);
      expect(callback).toHaveBeenCalledTimes(2);
    });
  });

  describe("entries", () => {
    it("should yield all values in order as entries", () => {
      const indexedSet = new IndexedSet([1, 2]);

      expect([...indexedSet.entries()]).toEqual([
        [1, 1],
        [2, 2],
      ]);
    });
  });

  describe("keys", () => {
    it("should yield all values in order", () => {
      const indexedSet = new IndexedSet([1, 2]);

      expect([...indexedSet.keys()]).toEqual([1, 2]);
    });
  });

  describe("Symbol.iterator", () => {
    it("should yield all values in order", () => {
      const indexedSet = new IndexedSet([1, 2]);

      expect([...indexedSet[Symbol.iterator]()]).toEqual([1, 2]);
    });
  });
});

export {};
