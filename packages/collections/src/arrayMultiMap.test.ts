import { ArrayMultiMap } from "./arrayMultiMap";

describe("multimap.arrayMultiMap", () => {
  describe("constructor", () => {
    it("should create an empty ArrayMultiMap", () => {
      const map = new ArrayMultiMap();

      expect([...map.entries()]).toEqual([]);
    });

    it("should create a pre initialized ArrayMultiMap", () => {
      const map = new ArrayMultiMap([
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

      const map = new ArrayMultiMap();

      map.add(key, value);

      expect(map).toEqual(new ArrayMultiMap([[key, value]]));
    });

    it("should add the entry if the key already exists", () => {
      const [key, value1, value2] = symbolGenerator();

      const map = new ArrayMultiMap([[key, value1]]);

      map.add(key, value2);

      expect(map).toEqual(
        new ArrayMultiMap([
          [key, value1],
          [key, value2],
        ])
      );
    });
  });

  describe("delete", () => {
    it("should not modify the ArrayMultiMap if the key does not exist", () => {
      const [key1, key2, value] = symbolGenerator();

      const map = new ArrayMultiMap([[key1, value]]);

      const result = map.delete(key2);

      expect(result).toBe(false);
      expect(map).toEqual(new ArrayMultiMap([[key1, value]]));
    });

    it("should remove all entries with the key", () => {
      const [key1, key2, value1, value2] = symbolGenerator();

      const map = new ArrayMultiMap([
        [key1, value1],
        [key1, value2],
        [key2, value1],
      ]);

      const result = map.delete(key1);

      expect(result).toBe(true);
      expect(map).toEqual(new ArrayMultiMap([[key2, value1]]));
    });
  });

  describe("set", () => {
    it("should set the values to the key if the key does not exist", () => {
      const [key1, key2, value1, value2] = symbolGenerator();

      const map = new ArrayMultiMap([[key1, value1]]);

      map.set(key2, [value1, value2]);

      expect(map).toEqual(
        new ArrayMultiMap([
          [key1, value1],
          [key2, value1],
          [key2, value2],
        ])
      );
    });

    it("should override all values if key already exists", () => {
      const [key1, value1, value2, value3] = symbolGenerator();

      const map = new ArrayMultiMap([[key1, value1]]);

      map.set(key1, [value2, value2, value3]);

      expect(map).toEqual(
        new ArrayMultiMap([
          [key1, value2],
          [key1, value2],
          [key1, value3],
        ])
      );
    });

    it("should not add key if no values provided", () => {
      const map = new ArrayMultiMap();

      map.set(Symbol(), []);

      expect(map).toEqual(new ArrayMultiMap());
    });
  });
});

export {};
