/**
 * @packageDocumentation
 *
 * This module contains utilities for working with {@link Sort}
 *
 * @example
 * Single sort on click
 * ```ts
 * const toggleDirection = toggle(defaultSortDirectionCycler);
 *
 * const sort = new Sort();
 *
 * const handleClick = (property) => {
 *   toggleDirection(property, true)(sort);
 * };
 * ```
 *
 * @example
 * Multi sort on shift click
 * ```ts
 * const toggleDirection = toggle(defaultSortDirectionCycler);
 *
 * const sort = new Sort();
 *
 * const handleShiftClick = (property) => {
 *   toggleDirection(property)(sort);
 * };
 * ```
 */

export * from "./_types";
export * from "./defaultSortDirectionCycler";
export * from "./sort";
export * from "./toggle";
