import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "../app/data-table";
import { columns } from "../app/columns";
import { ColumnDef } from "@tanstack/react-table";

const meta: Meta<typeof DataTable> = {
  title: "DataTable",
  component: DataTable,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    columns: columns as ColumnDef<unknown, unknown>[],
    data: [
      {
        count: 13,
        name: "Lisa",
      },
      {
        count: 70,
        name: "Mark",
      },
      {
        count: 15,
        name: "Adam",
      },
      {
        count: 44,
        name: "Ana",
      },
      {
        count: 30,
        name: "Tom",
      },
      {
        count: 33,
        name: "Matt",
      },
      {
        count: 35,
        name: "Eva",
      },
      {
        count: 55,
        name: "Richard",
      },
      {
        count: 66,
        name: "Monica",
      },
      {
        count: 32,
        name: "Martha",
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    columns: columns as ColumnDef<unknown, unknown>[],
    data: [],
  },
};

export const ToolbarDisabled: Story = {
  args: {
    columns: columns as ColumnDef<unknown, unknown>[],
    data: [
      {
        count: 13,
        name: "Lisa",
      },
      {
        count: 70,
        name: "Mark",
      },
      {
        count: 15,
        name: "Adam",
      },
      {
        count: 44,
        name: "Ana",
      },
      {
        count: 30,
        name: "Tom",
      },
      {
        count: 33,
        name: "Matt",
      },
      {
        count: 35,
        name: "Eva",
      },
      {
        count: 55,
        name: "Richard",
      },
      {
        count: 66,
        name: "Monica",
      },
      {
        count: 32,
        name: "Martha",
      },
      {
        count: 35,
        name: "Martha",
      },
      {
        count: 37,
        name: "Martha",
      },
    ],
    toolbarDisabled: false,
  },
};
