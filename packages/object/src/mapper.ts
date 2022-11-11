import { isArray } from "@benneq/array";
import { isFunction, Mapper } from "@benneq/function";

type Primitive = string | null | number | boolean | undefined | bigint | symbol;
type DefFunction<I, T> = (value: I) => T;
type DefArray<I, T> = ReadonlyArray<MapperDefinition<I, T>>;
type DefObject<I, T> = Readonly<{ [key in keyof T]: MapperDefinition<I, T[key]> }>;

type MapperDefinition<I, T> = T extends Primitive
  ? DefFunction<I, T>
  : T extends ReadonlyArray<infer R>
  ? DefArray<I, R>
  : DefObject<I, T>;

/**
 *
 * @example
 * ```
 * const valueMapper = mapper({
 *   a: [
 *     value => value.a.length,
 *     {
 *       a: value => value.a[0],
 *       z: value => value.a.at(-1)
 *     }
 *   ],
 *   B: value => value.b.toUpperCase()
 * });
 *
 * const value = {
 *   a: [1,2,3],
 *   b: "b"
 * };
 *
 * const mappedValue = valueMapper(value);
 * console.log(mappedValue); // { a:[3,{a:1,z:3}], B: "B" }
 * ```
 *
 * @param def
 * @returns
 */
export const mapper =
  <I, T>(def: MapperDefinition<I, T>): Mapper<I, T> =>
  (initialValue) => {
    if (isFunction(def)) {
      return def(initialValue);
    } else if (isArray(def)) {
      return def.map((e) => mapper(e)(initialValue)) as T;
    } else {
      return Object.entries(def).reduce((acc, [key, value]: [string, any]) => {
        acc[key] = mapper(value)(initialValue);
        return acc;
      }, {} as Record<string, unknown>) as T;
    }
  };
