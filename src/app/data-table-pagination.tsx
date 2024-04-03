import {
  ChevronsLeft,
  ChevronLeft,
  ChevronsRight,
  ChevronRight,
} from "lucide-react";

import { Table } from "@tanstack/react-table";
import { Button } from "../components/ui/button";

export interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

export function DataTablePagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  return (
    <div className="flex items-center justify-center gap-2">
      <Button
        onClick={() => table.firstPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <span className="sr-only">Go to first page</span>
        <ChevronsLeft className="h-4 w-4" />
      </Button>
      <Button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
      >
        <span className="sr-only">Go to previous page</span>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <span className="flex items-center gap-1">
        <div>Page</div>
        <strong>
          {table.getState().pagination.pageIndex + 1} of{" "}
          {table.getPageCount().toLocaleString()}
        </strong>
      </span>
      <Button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
      >
        <span className="sr-only">Go to next page</span>
        <ChevronRight className="h-4 w-4" />
      </Button>
      <Button
        onClick={() => table.lastPage()}
        disabled={!table.getCanNextPage()}
      >
        <span className="sr-only">Go to last page</span>
        <ChevronsRight className="h-4 w-4" />
      </Button>
    </div>
  );
}
