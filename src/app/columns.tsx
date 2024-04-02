import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { Button } from "../components/ui/button";

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
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Tag
          <ArrowUpDown className="ml-2 h-4 w-4" />
          <span className="sr-only">Sort from largest/smallest</span>
        </Button>
      );
    },
    cell: ({ row }) => <div className="lowercase">{row.getValue("name")}</div>,
  },

  {
    accessorKey: "count",
    header: ({ column }) => {
      return (
        <Button
          className="ml-auto"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Posts related
          <ArrowUpDown className="ml-2 h-4 w-4" />
          <span className="sr-only">Sort alphabetically</span>
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase text-right">{row.getValue("count")}</div>
    ),
  },
];
