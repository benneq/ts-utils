import { swap } from "@benneq/array";
import { Comparator } from "@benneq/comparator";

/**
 * A queue that sorts its values by priority.
 */
export interface PriorityQueue<T> {
  /**
   * Returns the number of values in this queue
   */
  get size(): number;

  /**
   * Adds a value to this queue
   *
   * @param value - the value to add
   */
  add(value: T): void;

  /**
   * Returns the first value of this queue.
   *
   * @returns - the first value, or `undefined` if queue is empty
   */
  peek(): T | undefined;

  /**
   * Removes the first value from this queue and returns it.
   *
   * @returns - the first value, or `undefined` if queue is empty
   */
  poll(): T | undefined;
}

/**
 * Creates a new {@link PriorityQueue} that orders its values using a
 * {@link Comparator}.
 *
 * @param comparator - the {@link Comparator} to use
 * @returns - the created {@link PriorityQueue}
 */
export const priorityQueue: {
  <T>(comparator: Comparator<T>): PriorityQueue<T>;
} = <T>(comparator: Comparator<T>, init: T[] = []): PriorityQueue<T> => {
  const heap = init;

  const isGreater = (a: number, b: number) =>
    comparator(init[a] as T, init[b] as T) > 0;

  const size = () => heap.length;

  const siftUp = (node = size() - 1, parent = ((node + 1) >>> 1) - 1) => {
    for (
      ;
      node && isGreater(node, parent);
      node = parent, parent = ((node + 1) >>> 1) - 1
    ) {
      swap(node, parent)(heap);
    }
  };

  const siftDown = (s = size(), node = 0) => {
    for (;;) {
      const leftNode = 2 * node + 1;
      const rightNode = 2 * node + 2;

      if (
        (leftNode >= s || isGreater(node, leftNode)) &&
        (rightNode >= s || isGreater(node, rightNode))
      ) {
        break;
      }

      const maxChild =
        rightNode < s && isGreater(rightNode, leftNode) ? rightNode : leftNode;

      swap(node, maxChild)(heap);

      node = maxChild;
    }
  };

  return {
    get size() {
      return size();
    },

    peek() {
      return heap[0];
    },

    add(value) {
      heap.push(value);
      siftUp();
    },

    poll(value = heap[0]) {
      if (size()) {
        swap(0, size() - 1)(heap);
      }

      heap.pop();
      siftDown();

      return value;
    },
  };
};
