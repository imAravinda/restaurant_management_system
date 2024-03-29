import { useParams } from "react-router-dom";
import useFetch from "../../Hooks/useFetch";
import Spinner from "../../components/shared/Spinner/Spinner";
import TableDetail from "../../components/shared/TableDetail/TableDetail";

const AdminViewTableDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { data, isPending } = useFetch(`/api/v1/table/${id}`);
  console.log(data);
  const table = data?.data?.table;
  return (
    <>
      {isPending && <Spinner />}
      {table && <TableDetail table={table} />}
    </>
  );
};

export default AdminViewTableDetails;
