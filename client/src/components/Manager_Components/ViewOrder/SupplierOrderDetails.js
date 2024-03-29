import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { RegularButton } from "../../shared/SharedElements/Buttons";
import { Container, Header } from "../../shared/SharedElements/SharedElements";
import * as l from "./SupplierOrderDetailsElements";
const SupplierOrderDetails = (props) => {
  const { user } = useAuth();
  console.log(props.data3);
  return (
    <Container>
      <Header>Details of Supplier Orders</Header>
      <l.SubContainer>
        <l.Table>
          <l.Tr>
            <l.Th>Supplier Name</l.Th>
            <l.Th>Supplier Email</l.Th>
            <l.Th>Item Name</l.Th>
            <l.Th>Unit Price</l.Th>
            <l.Th>Status</l.Th>
          </l.Tr>
          {props.data3.map((ItemArray) => {
            return ItemArray.Item.map((row) => {
              return (
                <l.Tr key={ItemArray.id}>
                  <l.Td>{ItemArray.SupplierName}</l.Td>
                  <l.Td>{ItemArray.SupplierEmail}</l.Td>
                  <l.Td>{row.ItemName}</l.Td>
                  <l.Td>{row.Price}</l.Td>
                  <l.Td>{ItemArray.OrderStatus}</l.Td>
                </l.Tr>
              );
            });
          })}
        </l.Table>
      </l.SubContainer>
      <l.ButtonSection>
        <Link to={props.BackRoutes} className="btn">
          <RegularButton>Back</RegularButton>
        </Link>
      </l.ButtonSection>
    </Container>
  );
};

export default SupplierOrderDetails;
