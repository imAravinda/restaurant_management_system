// import { useParams } from "react-router-dom";
// import Spinner from "../../components/shared/Spinner/Spinner";
// import OrderConform from "../../components/Supplier/ViewOrder/OrderConform";
// import useFetch from "../../Hooks/useFetch";

// const SupplierOrderConform = () => {
//   const { id } = useParams();
//   console.log(id);
//   const { data, isPending } = useFetch(`/api/v1/stockorderbyid/${id}`);
//   const data2 = data?.data?.orderDetails;
//   console.log(data2);
//   return (
//     <>
//       {isPending && <Spinner />}
//       {data2 && <OrderConform data2={data2} />}
//     </>
//   );
// };

// export default SupplierOrderConform;
