import { MultiMap } from "./multiMap";

describe("multimap.multiMap", () => {
  describe("constructor", () => {
    it("should create an empty MultiMap", () => {
      const map = new MultiMap();

      expect([...map.entries()]).toEqual([]);
    });

    it("should create a pre initialized MultiMap", () => {
      const map = new MultiMap([
        [1, "a"],
        [2, "b"],
        [1, "a"],
        [1, "b"],
      ]);

      expect([...map.entries()]).toEqual([
        [1, "a"],
        [1, "a"],
        [1, "b"],
        [2, "b"],
      ]);
    });
  });

  describe("add", () => {
    it("should add the entry if the key does not exist", () => {
      const [key, value] = symbolGenerator();

      const map = new MultiMap();

      map.add(key, value);

      expect(map).toEqual(new MultiMap([[key, value]]));
    });

    it("should add the entry if the key already exists", () => {
      const [key, value1, value2] = symbolGenerator();

      const map = new MultiMap([[key, value1]]);

      map.add(key, value2);

      expect(map).toEqual(
        new MultiMap([
          [key, value1],
          [key, value2],
        ])
      );
    });
  });

  describe("delete", () => {
    it("should not modify the MultiMap if the key does not exist", () => {
      const [key1, key2, value] = symbolGenerator();

      const map = new MultiMap([[key1, value]]);

      map.delete(key2);

      expect(map).toEqual(new MultiMap([[key1, value]]));
    });

    it("should remove all entries with the key", () => {
      const [key1, key2, value1, value2] = symbolGenerator();

      const map = new MultiMap([
        [key1, value1],
        [key1, value2],
        [key2, value1],
      ]);

      map.delete(key1);

      expect(map).toEqual(new MultiMap([[key2, value1]]));
    });
  });

  describe("has", () => {
    it("should return true if MultiMap contains at least one entry with this key", () => {
      const [key, value] = symbolGenerator();

      const map = new MultiMap([[key, value]]);

      expect(map.has(key)).toBe(true);
    });

    it("should return false if MultiMap contains no entry with this key", () => {
      const [key1, key2, value] = symbolGenerator();

      const map = new MultiMap([[key1, value]]);

      expect(map.has(key2)).toBe(false);
    });

    it("should return true if MultiMap contains at least one entry with this key and value", () => {
      const [key, value] = symbolGenerator();

      const map = new MultiMap([[key, value]]);

      expect(map.has(key, value)).toBe(true);
    });

    it("should return false if MultiMap contains no entry with this key and value", () => {
      const [key1, key2, value1, value2] = symbolGenerator();

      const map = new MultiMap([[key1, value1]]);

      expect(map.has(key2, value1)).toBe(false);
      expect(map.has(key1, value2)).toBe(false);
      expect(map.has(key2, value2)).toBe(false);
    });
  });

  describe("size", () => {
    it("should return 0 if MultiMap has no entries", () => {
      const [key1, key2, value1, value2] = symbolGenerator();

      const map = new MultiMap();

      expect(map.size).toBe(0);
    });

    it("should return the number of entries", () => {
      const map = new MultiMap([
        [Symbol(), Symbol()],
        [Symbol(), Symbol()],
      ]);

      expect(map.size).toBe(2);
    });
  });

  describe("entries", () => {
    it("should yield all entries", () => {
      const [key1, key2, value1, value2] = symbolGenerator();

      const map = new MultiMap([
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

      const map = new MultiMap([
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

      const map = new MultiMap([
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
