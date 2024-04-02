import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useQuery } from "@tanstack/react-query";
import { Blocks } from "react-loader-spinner";
import { OctagonAlert } from "lucide-react";
import axios from "axios";
import "./globals.css";

const TablePage: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["myquery"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://api.stackexchange.com/2.3/tags?site=stackoverflow"
      );
      return data;
    },
  });

  if (isLoading)
    return (
      <div className="container mx-auto py-10 bg-white">
        <Blocks
          height="80"
          width="80"
          color="#1e9ff5"
          ariaLabel="blocks-loading"
          wrapperStyle={{ margin: "0 auto" }}
          wrapperClass="blocks-wrapper"
          visible={true}
        />
      </div>
    );

  if (error)
    return (
      <div className="container mx-auto py-10 bg-white">
        <div className="flex justify-center">
          <OctagonAlert color="#ff0000" className="mr-2" />
          <p className="text-center text-lg">
            An error has occurred: {error.message}
          </p>
        </div>
      </div>
    );

  return (
    <div className="container mx-auto py-10 bg-white">
      <DataTable columns={columns} data={data.items} />
    </div>
  );
};

export default TablePage;
