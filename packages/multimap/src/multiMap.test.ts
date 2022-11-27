import { ArrayMultiMap } from "./arrayMultiMap";

describe("multimap.multiMap", () => {
  describe("has", () => {
    it("should return true if MultiMap contains at least one entry with this key", () => {
      const [key, value] = symbolGenerator();

      const map = new ArrayMultiMap([[key, value]]);

      expect(map.has(key)).toBe(true);
    });

    it("should return false if MultiMap contains no entry with this key", () => {
      const [key1, key2, value] = symbolGenerator();

      const map = new ArrayMultiMap([[key1, value]]);

      expect(map.has(key2)).toBe(false);
    });

    it("should return true if MultiMap contains at least one entry with this key and value", () => {
      const [key, value] = symbolGenerator();

      const map = new ArrayMultiMap([[key, value]]);

      expect(map.has(key, value)).toBe(true);
    });

    it("should return false if MultiMap contains no entry with this key and value", () => {
      const [key1, key2, value1, value2] = symbolGenerator();

      const map = new ArrayMultiMap([[key1, value1]]);

      expect(map.has(key2, value1)).toBe(false);
      expect(map.has(key1, value2)).toBe(false);
      expect(map.has(key2, value2)).toBe(false);
    });
  });

  describe("size", () => {
    it("should return 0 if MultiMap has no entries", () => {
      const map = new ArrayMultiMap();

      expect(map.size).toBe(0);
    });

    it("should return the number of entries", () => {
      const map = new ArrayMultiMap([
        [Symbol(), Symbol()],
        [Symbol(), Symbol()],
      ]);

      expect(map.size).toBe(2);
    });
  });

  describe("entries", () => {
    it("should yield all entries", () => {
      const [key1, key2, value1, value2] = symbolGenerator();

      const map = new ArrayMultiMap([
        [key1, value1],
        [key1, value2],
        [key2, value1],
        [key1, value1],
      ]);

      const iterable = map.entries();

      expectIterableToEqual(
        iterable,
        [
          [key1, value1],
          [key1, value2],
          [key1, value1],
          [key2, value1],
        ],
        { toEqual: true }
      );
    });
  });

  describe("keys", () => {
    it("should yield all keys", () => {
      const [key1, key2, value1, value2] = symbolGenerator();

      const map = new ArrayMultiMap([
        [key1, value1],
        [key1, value2],
        [key2, value1],
        [key1, value1],
      ]);

      const iterable = map.keys();

      expectIterableToEqual(iterable, [key1, key2]);
    });
  });

  describe("values", () => {
    it("should yield all values", () => {
      const [key1, key2, value1, value2] = symbolGenerator();

      const map = new ArrayMultiMap([
        [key1, value1],
        [key1, value2],
        [key2, value1],
        [key1, value1],
      ]);

      const iterable = map.values();

      expectIterableToEqual(iterable, [value1, value2, value1, value1]);
    });
  });
});

export {};
