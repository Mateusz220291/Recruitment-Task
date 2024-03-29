import { ColumnDef } from "@tanstack/react-table";

export type Data = {
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
  count: number;
  name: string;
};

export const columns: ColumnDef<Data>[] = [
  {
    accessorKey: "name",
    header: "Name",
    sortingFn: "alphanumeric",
  },
  {
    accessorKey: "count",
    header: "Count",
    sortingFn: "alphanumeric",
  },
];
