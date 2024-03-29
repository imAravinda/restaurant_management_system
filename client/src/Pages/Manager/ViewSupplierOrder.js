import SupplierOrderDetails from "../../components/Manager_Components/ViewOrder/SupplierOrderDetails";
import Spinner from "../../components/shared/Spinner/Spinner";
import useFetch from "../../Hooks/useFetch";

const ViewSupplierOrder = (props) => {
  const { data, isPending } = useFetch("api/v1/SupplierOrder");
  console.log(data);
  return (
    <>
      {isPending && <Spinner />}
      {data && (
        <SupplierOrderDetails
          data3={data?.data?.placedorders}
          BackRoutes={props.BackRoutes}
        />
      )}
    </>
  );
};

export default ViewSupplierOrder;
