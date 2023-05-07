import { useState } from "react";
import { FormButton, RegularButton } from "../SharedElements/Buttons";
import { Container, Header } from "../SharedElements/SharedElements";
import * as l from "./TableDetailElement";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
const TableDetail = (props) => {
  const [TableNo, setTableNo] = useState(props.table.TableNo);
  const [NoOfPersons, setNoOfPersons] = useState(props.table.NoOfPersons);
  const [price, setprice] = useState(props.table.price);
  const [Status, setStatus] = useState(props.table.Status);

  const { user } = useAuth();
  return (
    <Container>
      <Header>Table Details</Header>
      <l.Div>
        <l.Div1>
          <l.TextFeild
            type="text"
            placeholder="Table No"
            value={TableNo}
            onChange={(e) => setTableNo(e.target.value)}
          />
          <l.TextFeild
            type="text"
            placeholder="Maximum No of Persons"
            value={NoOfPersons}
            onChange={(e) => setNoOfPersons(e.target.value)}
          />
          <l.TextFeild
            type="text"
            placeholder="Reservation Fee"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
          <l.TextFeild
            type="text"
            placeholder="Status(Available/Not)"
            value={Status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </l.Div1>
        <l.Div2>
          <l.Sec>
            <FormButton>Update</FormButton>
          </l.Sec>
        </l.Div2>
      </l.Div>
      <l.Div3>
        <Link
          to={
            user.Role === "Admin" ? "/AdminView-Tables" : "/ManagerView-Tables"
          }
          className="btn"
        >
          <RegularButton>Back</RegularButton>
        </Link>
      </l.Div3>
    </Container>
  );
};

export default TableDetail;
