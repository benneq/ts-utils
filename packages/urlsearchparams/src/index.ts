/**
 * @packageDocumentation
 *
 * This module contains utilities for working with {@link URLSearchParams}
 *
 * @example
 * ```ts
 * // create the URLSearchParams mapper
 * const urlSearchParamsMapper = mapper({
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
 * // create an (optional, but recommended) URLSearchParams sanitizer
 * const sanitize = pipe(
 *   map(([key, value]) => [key.trim(), value.trim()]),
 *   filter(([key, value]) => !!key && !!value),
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
 * // trim all keys and values, and remove empty strings
 * const sanitizedUrlSearchParams = new URLSearchParams(sanitize(urlSearchParams));
 *
 * // map URLSearchParams
 * const result = urlSearchParamsMapper(sanitizedUrlSearchParams);
 * console.log(result); // { categories:["a","b"], active:true, paignation:{page:1,size:5}, hours:[] }
 * ```
 */

export * from "./fromMixedObject";
export * from "./get";
