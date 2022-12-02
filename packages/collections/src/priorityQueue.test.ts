import { numberComparator } from "@benneq/comparator";
import { priorityQueue } from "./priorityQueue";

describe("multimap.priorityQueue", () => {
  describe("constructor", () => {
    it("should create an empty PriorityQueue", () => {
      const queue = priorityQueue(numberComparator);

      expect(queue.size).toBe(0);
      expect(queue.peek()).toBeUndefined();
    });
  });

  describe("size", () => {
    it("should return the number of added values", () => {
      const queue = priorityQueue(numberComparator);
      queue.add(1);
      queue.add(1);
      queue.add(2);

      expect(queue.size).toBe(3);
    });
  });

  describe("add", () => {
    it("should add values in the right order", () => {
      const queue = priorityQueue(numberComparator);
      queue.add(3);
      queue.add(1);
      queue.add(2);
      queue.add(3);

      expect(queue.size).toBe(4);
      expect(queue.poll()).toBe(3);
      expect(queue.poll()).toBe(3);
      expect(queue.poll()).toBe(2);
      expect(queue.poll()).toBe(1);
    });
  });

  describe("peek", () => {
    it("should return the first value", () => {
      const queue = priorityQueue(numberComparator);
      queue.add(3);
      queue.add(1);

      expect(queue.peek()).toBe(3);
      expect(queue.peek()).toBe(3);
      expect(queue.peek()).toBe(3);
    });
  });

  describe("poll", () => {
    it("should remove the first value and return it", () => {
      const queue = priorityQueue(numberComparator);
      queue.add(3);
      queue.add(1);

      expect(queue.poll()).toBe(3);
      expect(queue.poll()).toBe(1);
      expect(queue.poll()).toBeUndefined();
    });
  });
});

export {};
