import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const DemoPage: React.FC = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["myquery"],
    queryFn: async () => {
      const { data } = await axios.get(
        "https://api.stackexchange.com/2.3/tags?site=stackoverflow"
      );
      return data;
    },
  });

  if (isLoading) return <div>"Loading..."</div>;

  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data.items} />
    </div>
  );
};

export default DemoPage;
