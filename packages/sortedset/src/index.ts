/**
 * @packageDocumentation
 *
 * This module contains utilities for working with {@link SortedSet}s
 *
 * @example
 * Add, delete and iterate
 * ```ts
 * const sortedSet = new SortedSet(numberComparator);
 *
 * sortedSet.add(2);
 * sortedSet.add(1, 2, 3);
 * sortedSet.delete(1);
 *
 * const result = sortedSet.has(2);
 * console.log(result); // true
 *
 * for(const value of sortedSet) {
 *   console.log(value); // 2, 3
 * }
 * ```
 */

export * from "./isSortedSet";
export * from "./sortedSet";
