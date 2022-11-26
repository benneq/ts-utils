import { Sort } from "./sort";
import { SortDirectionCycler } from "./_types";

/**
 * Creates a {@link Function} that toggles properties of a {@link Sort}.
 *
 * @example
 * ```ts
 * const mySort = sort([['a', 'asc'], ['b', 'asc']]);
 * const toggleDirection = toggle(defaultSortDirectionCycler);
 * const toggleDirection('a')(mySort);
 * console.log(mySort); // Map([['b', 'asc'], ['a', 'desc']])
 * ```
 *
 * @param sortDirectionCycler - the {@link SortDirectionCycler} to use
 * @returns the toggle {@link Function}
 */
export const toggle =
  (sortDirectionCycler: SortDirectionCycler) =>
  <T extends string>(property: T, clear?: boolean) =>
  (sort: Sort<T>) => {
    const direction = sortDirectionCycler(sort.get(property));
    if (clear) {
      sort.clear();
    } else {
      sort.delete(property);
    }
    if (direction) {
      sort.set(property, direction);
    }
  };
