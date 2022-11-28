import { IndexedSet } from "./indexedSet";

describe("collections.indexedSet", () => {
  describe("constructor", () => {
    it("should create an empty IndexedSet", () => {
      const indexedSet = new IndexedSet();
      expect(indexedSet.size).toBe(0);
    });
  });

  describe("add", () => {
    it("should add the value at the end if it does not exist", () => {
      const indexedSet = new IndexedSet();
      indexedSet.add(2);

      indexedSet.add(1);

      expect([...indexedSet.values()]).toEqual([2, 1]);
    });

    it("should not modify the IndexedSet if it already contains the value", () => {
      const indexedSet = new IndexedSet();
      indexedSet.add(5);
      indexedSet.add(4);

      indexedSet.add(5);

      expect([...indexedSet.values()]).toEqual([5, 4]);
    });
  });

  describe("clear", () => {
    it("should clear the IndexedSet", () => {
      const indexedSet = new IndexedSet();
      indexedSet.add(5);

      indexedSet.clear();

      expect([...indexedSet.values()]).toEqual([]);
    });
  });

  describe("delete", () => {
    it("should remove the value if it exists", () => {
      const indexedSet = new IndexedSet([1, 2, 3]);

      indexedSet.delete(2);

      expect([...indexedSet.values()]).toEqual([1, 3]);
    });

    it("should not modify the IndexedSet if it does not contain the value", () => {
      const indexedSet = new IndexedSet([1, 2]);

      indexedSet.delete(4);

      expect([...indexedSet.values()]).toEqual([1, 2]);
    });
  });

  describe("at", () => {
    it("should return the value at the index", () => {
      const indexedSet = new IndexedSet([1, 2, 3]);

      const result = indexedSet.at(1);

      expect(result).toBe(2);
    });

    it("should return undfined if index out of bounds", () => {
      const indexedSet = new IndexedSet([1, 2, 3]);

      const result = indexedSet.at(3);

      expect(result).toBe(undefined);
    });
  });

  describe("set", () => {
    it("should move an existing value to the new index", () => {
      const indexedSet = new IndexedSet([1, 2, 3]);

      indexedSet.set(1, 1);

      expect([...indexedSet.values()]).toEqual([2, 1, 3]);
    });

    it("should insert the value if it did not exist", () => {
      const indexedSet = new IndexedSet([1, 2, 3]);

      indexedSet.set(0, 0);

      expect([...indexedSet.values()]).toEqual([0, 1, 2, 3]);
    });
  });

  describe("has", () => {
    it("should return true if the IndexedSet contains the value", () => {
      const indexedSet = new IndexedSet([1, 2, 3]);

      const result = indexedSet.has(1);

      expect(result).toBe(true);
    });

    it("should return false if the IndexedSet does not contain the value", () => {
      const indexedSet = new IndexedSet([1, 2]);

      const result = indexedSet.has(0);

      expect(result).toBe(false);
    });
  });

  describe("values", () => {
    it("should yield all values in order", () => {
      const indexedSet = new IndexedSet([1, 2]);

      expect([...indexedSet.values()]).toEqual([1, 2]);
    });
  });

  describe("Symbol.toStringTag", () => {
    it("should return IndexedSet", () => {
      const indexedSet = new IndexedSet();

      expect(indexedSet[Symbol.toStringTag]).toEqual("IndexedSet");
    });
  });
});

export {};
