/**
 * Used to create branded types
 *
 * @example
 * type Currency = Brand<string, "Currency">
 */
export type Brand<K, T> = K & { __brand: T };

/**
 * Includes all values that are `== 0`
 */
export type Falsy = false | 0 | "" | null | undefined;

/**
 * The opposite of Falsy
 */
export type Truthy<T> = Exclude<T, Falsy>;

/**
 * Includes `null` and `undefined`
 */
export type Nullish = null | undefined;

/**
 * A TypeScript Type Guard that can assert a value is of type T
 */
export type Guard<T, S extends T> = (value: T) => value is S;

/**
 * A key-value pair encoded as Tuple
 *
 * Returned for example by `Map.prototype.entries`, `Object.entries` and
 * `URLSearchParams.prototype.entries`.
 */
export type Entry<K = unknown, V = unknown> = [K, V];

export type ObjectEntry<T> = { [K in keyof T]: [K, T[K]] }[keyof T];

/**
 * @example
 * ```ts
 * const tree: Tree<'children', { value: number }> = {
 *   value: 1,
 *   children: [
 *     {
 *       value: 2
 *     },
 *     {
 *       value: 3,
 *       children: [
 *         { value: 4 }
 *       ]
 *     }
 *   ]
 * }
 * ```
 */
export type Tree<K extends string, T> = T & {
  [key in K]?: Array<Tree<K, T>>;
};

/**
 * Removes the first element from the array
 */
export type DropFirst<T extends unknown[]> = T extends [unknown, ...infer U]
  ? U
  : never;
