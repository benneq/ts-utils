import { MappedSet } from "./mappedSet";

describe("collections.mappedSet", () => {
  describe("constructor", () => {
    it("should create an empty MappedSet", () => {
      const mappedSet = new MappedSet<string>((str) => str.length);
      expect(mappedSet.size).toBe(0);
    });
  });

  describe("add", () => {
    it("should add the value if it does not have a mapped value yet", () => {
      const mappedSet = new MappedSet<string>((str) => str.length);
      mappedSet.add("a");
      mappedSet.add("ccc");
      mappedSet.add("bb");

      expect([...mappedSet.values()]).toEqual(["a", "ccc", "bb"]);
    });

    it("should not modify the MappedSet if it already the mapped value", () => {
      const mappedSet = new MappedSet<string>((str) => str.length);
      mappedSet.add("a");
      mappedSet.add("bb");

      mappedSet.add("ab");

      expect([...mappedSet.values()]).toEqual(["a", "ab"]);
    });
  });

  describe("clear", () => {
    it("should clear the MappedSet", () => {
      const mappedSet = new MappedSet<string>((str) => str.length);
      mappedSet.add("a");

      mappedSet.clear();

      expect([...mappedSet.values()]).toEqual([]);
    });
  });

  describe("delete", () => {
    it("should remove the mapped value", () => {
      const mappedSet = new MappedSet<string>((str) => str.length);
      mappedSet.add("a");
      mappedSet.add("bb");

      mappedSet.delete("bb");

      expect([...mappedSet.values()]).toEqual(["a"]);
    });

    it("should not modify the MappedSet if it does not contain the value", () => {
      const mappedSet = new MappedSet<string>((str) => str.length);
      mappedSet.add("a");

      mappedSet.delete("bb");

      expect([...mappedSet.values()]).toEqual(["a"]);
    });
  });

  describe("forEach", () => {
    it("should call the callback for each element in sorted order", () => {
      const mappedSet = new MappedSet<string>((str) => str.length);
      mappedSet.add("a");
      mappedSet.add("bb");

      const callback = jest.fn();
      mappedSet.forEach(callback);

      expect(callback).toHaveBeenNthCalledWith(1, "a", "a", mappedSet);
      expect(callback).toHaveBeenNthCalledWith(2, "bb", "bb", mappedSet);
      expect(callback).toHaveBeenCalledTimes(2);
    });
  });

  describe("has", () => {
    it("should return true if the MappedSet contain the value", () => {
      const mappedSet = new MappedSet<string>((str) => str.length);
      mappedSet.add("a");

      const result = mappedSet.has("b");

      expect(result).toBe(true);
    });

    it("should return false if the MappedSet does not contain the value", () => {
      const mappedSet = new MappedSet<string>((str) => str.length);
      mappedSet.add("a");

      const result = mappedSet.has("ab");

      expect(result).toBe(false);
    });
  });

  describe("entries", () => {
    it("should yield all values in order as entries", () => {
      const mappedSet = new MappedSet<string>((str) => str.length);
      mappedSet.add("a");
      mappedSet.add("ab");

      expect([...mappedSet.entries()]).toEqual([
        ["a", "a"],
        ["ab", "ab"],
      ]);
    });
  });

  describe("keys", () => {
    it("should yield all values in order", () => {
      const mappedSet = new MappedSet<string>((str) => str.length);
      mappedSet.add("a");
      mappedSet.add("ab");

      expect([...mappedSet.keys()]).toEqual(["a", "ab"]);
    });
  });

  describe("values", () => {
    it("should yield all values in order", () => {
      const mappedSet = new MappedSet<string>((str) => str.length);
      mappedSet.add("a");
      mappedSet.add("ab");

      expect([...mappedSet.values()]).toEqual(["a", "ab"]);
    });
  });

  describe("Symbol.iterator", () => {
    it("should yield all values in order", () => {
      const mappedSet = new MappedSet<string>((str) => str.length);
      mappedSet.add("a");
      mappedSet.add("ab");

      expect([...mappedSet[Symbol.iterator]()]).toEqual(["a", "ab"]);
    });
  });

  describe("Symbol.toStringTag", () => {
    it("should return MappedSet", () => {
      const mappedSet = new MappedSet<string>((str) => str.length);

      expect(mappedSet[Symbol.toStringTag]).toEqual("MappedSet");
    });
  });
});

export {};
