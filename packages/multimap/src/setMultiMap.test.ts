import { SetMultiMap } from "./setMultiMap";

describe("multimap.setMultiMap", () => {
  describe("constructor", () => {
    it("should create an empty SetMultiMap", () => {
      const map = new SetMultiMap();

      expect([...map.entries()]).toEqual([]);
    });

    it("should create a pre initialized SetMultiMap", () => {
      const map = new SetMultiMap([
        [1, "a"],
        [2, "b"],
        [1, "a"],
        [1, "b"],
      ]);

      expect([...map.entries()]).toEqual([
        [1, "a"],
        [1, "b"],
        [2, "b"],
      ]);
    });
  });

  describe("add", () => {
    it("should add the entry if the key does not exist", () => {
      const [key, value] = symbolGenerator();

      const map = new SetMultiMap();

      map.add(key, value);

      expect(map).toEqual(new SetMultiMap([[key, value]]));
    });

    it("should add the entry if the key already exists", () => {
      const [key, value1, value2] = symbolGenerator();

      const map = new SetMultiMap([[key, value1]]);

      map.add(key, value2);

      expect(map).toEqual(
        new SetMultiMap([
          [key, value1],
          [key, value2],
        ])
      );
    });
  });

  describe("delete", () => {
    it("should not modify the SetMultiMap if the key does not exist", () => {
      const [key1, key2, value] = symbolGenerator();

      const map = new SetMultiMap([[key1, value]]);

      map.delete(key2);

      expect(map).toEqual(new SetMultiMap([[key1, value]]));
    });

    it("should remove all entries with the key", () => {
      const [key1, key2, value1, value2] = symbolGenerator();

      const map = new SetMultiMap([
        [key1, value1],
        [key1, value2],
        [key2, value1],
      ]);

      map.delete(key1);

      expect(map).toEqual(new SetMultiMap([[key2, value1]]));
    });
  });

  describe("set", () => {
    it("should set the values to the key if the key does not exist", () => {
      const [key1, key2, value1, value2] = symbolGenerator();

      const map = new SetMultiMap([[key1, value1]]);

      map.set(key2, [value1, value2]);

      expect(map).toEqual(
        new SetMultiMap([
          [key1, value1],
          [key2, value1],
          [key2, value2],
        ])
      );
    });

    it("should override all values if key already exists", () => {
      const [key1, value1, value2, value3] = symbolGenerator();

      const map = new SetMultiMap([[key1, value1]]);

      map.set(key1, [value2, value2, value3]);

      expect(map).toEqual(
        new SetMultiMap([
          [key1, value2],
          [key1, value3],
        ])
      );
    });
  });
});

export {};
