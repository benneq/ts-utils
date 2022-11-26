export type SortDirection = "asc" | "desc";

export type SortDirectionCycler = (
  sortDirection: SortDirection | undefined
) => SortDirection | undefined;
