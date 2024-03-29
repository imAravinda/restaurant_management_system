import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { RegularButton } from "../SharedElements/Buttons";
import { Container, Header } from "../SharedElements/SharedElements";
import * as l from "./TableDetailsElements";
import { AiFillEye } from "react-icons/ai";
const TableDetails = (props) => {
  const { user } = useAuth();
  const tables = props.tables;
  return (
    <Container>
      <Header>Details Of All Tables</Header>
      <l.SubContainer>
        <l.Table>
          <l.Tr1>
            <l.Tr>
              <l.Th>Table No</l.Th>
              <l.Th>Maximum No of Persons</l.Th>
              <l.Th>Reservation Fee</l.Th>
              <l.Th>Status</l.Th>
              <l.Th></l.Th>
            </l.Tr>
            <l.data>
              {tables.map((table) => {
                return (
                  <l.Tr key={table._id}>
                    <l.Td>{table.TableNo}</l.Td>
                    <l.Td>{table.NoOfPersons}</l.Td>
                    <l.Td>{table.price}</l.Td>
                    <l.Td>{table.Status}</l.Td>
                    {user.Role === "Manager" || user.Role === "Admin" ? (
                      <Link
                        to={
                          `/AdminView-Table/${table.id}` ||
                          `/ManagerView-Table/${table.id}`
                        }
                        className="btn"
                      >
                        <l.Icon>
                          <AiFillEye />
                        </l.Icon>
                      </Link>
                    ) : null}
                  </l.Tr>
                );
              })}
            </l.data>
          </l.Tr1>
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

export default TableDetails;
