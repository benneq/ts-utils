/**
 * @packageDocumentation
 *
 * This module contains utilities for working with {@link URLSearchParams}
 *
 * @example
 * ```ts
 * // create the URLSearchParams parser
 * const parseUrlSearchParams = mapper({
 *   categories: pipe(
 *     get("category"),
 *   ),
 *   active: pipe(
 *     get("active"),
 *     first(""),
 *     parseBoolean,
 *   ),
 *   pagination: {
 *     page: pipe(
 *       get("page"),
 *       map(parseInteger),
 *       filter(isNotUndefined),
 *       filter(isPositive),
 *       first(1),
 *     ),
 *     size: pipe(
 *       get("pageSize"),
 *       map(parseInteger),
 *       filter(isNotUndefined),
 *       filter(isPositive),
 *       first(5),
 *     )
 *   },
 *   hours: pipe(
 *     get("hours"),
 *     flatMap(split(",")),
 *     map(parseInteger),
 *     filter(isNotUndefined),
 *     distinct(),
 *     toArray(),
 *   ),
 * });
 *
 * // function that trims all keys and values and transforms keys to lowercase
 * const normalizeUrlSearchParams = pipe(
 *   map(([key, value]) => [key.trim(), value.trim()]),
 *   map(([key, value]) => [key.toLowerCase(), value]),
 * );
 *
 * // build a function that first normalizes and then parses URLSearchParams
 * const normalizeAndParse = pipe(
 *   normalizeUrlSearchParams,
 *   parseUrlSearchParams
 * );
 *
 * // the incoming URLSearchParams to parse
 * const urlSearchParams = new URLSearchParams(`
 *   ?category=a
 *   &category=b
 *   &active=true
 *   &page=1
 *   &pageSize=5
 * `);
 *
 * // parse URLSearchParams
 * const result = normalizeAndParse(urlSearchParams);
 * console.log(result); // { categories:["a","b"], active:true, paignation:{page:1,size:5}, hours:[] }
 * ```
 */

export * from "./fromMixedObject";
export * from "./get";
