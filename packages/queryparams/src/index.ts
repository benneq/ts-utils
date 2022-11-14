/**
 * @packageDocumentation
 *
 * This module contains utilities for working with URL Query Params
 *
 * @example
 * ```ts
 * // create the QueryParams mapper
 * const queryParamsMapper = mapper({
 *   categories: pipe(
 *     get("category"),
 *   ),
 *   active: pipe(
 *     get("active"),
 *     first(),
 *     toBoolean,
 *   ),
 *   pagination: {
 *     page: pipe(
 *       get("page"),
 *       first(),
 *       toInteger
 *     ),
 *     size: pipe(
 *       get("pageSize"),
 *       first(),
 *       toInteger
 *     )
 *   }
 * });
 *
 * // create an (optional, but recommended) QueryParams sanitizer
 * const queryParamsSanitizer = sanitize(trimAndRemoveEmpty, trimAndRemoveEmpty);
 *
 * const urlSearchParams = new URLSearchParams("
 *   ?category=a
 *   &category=b
 *   &active=true
 *   &page=1
 *   &pageSize=5
 * ");
 *
 * // convert to QueryParams
 * comst queryParams = fromURLSearchParams(urlSearchParams);
 *
 * // trim all keys and values, and remove empty strings
 * const sanitizedQueryParams = queryParamsSanitizer(queryParams);
 *
 * // map QueryParams
 * const result = queryParamsMapper(sanitizedQueryParams);
 * console.log(result); // { categories:["a","b"], active:true, paignation:{page:1,size:5} }
 * ```
 */

export * from "./_types";
export * from "./fromMixedObject";
export * from "./fromURLSearchParams";
export * from "./get";
export * from "./isQueryParams";
export * from "./sanitize";
