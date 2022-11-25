export type SortDirection = "asc" | "desc";

export type Sort<P extends string> = Map<P, SortDirection>;

export type SortDirectionCycler = (
  sortDirection: SortDirection | undefined
) => SortDirection | undefined;
