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
 * Returned for example by `Map.prototype.entries` or `Object.entries`.
 */
export type Entry<K, V> = [K, V];
