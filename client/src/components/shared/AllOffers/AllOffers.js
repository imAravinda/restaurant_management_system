import { AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { RegularButton } from "../SharedElements/Buttons";
import { Container, Header } from "../SharedElements/SharedElements";
import * as l from "./AllOffersElements";
const AllOffersComponent = (props) => {
  console.log(props.data1);
  const { user } = useAuth();
  return (
    <Container>
      <Header>Offers Details</Header>
      <l.SubContainer>
        <l.Table>
          <thead>
            <l.Tr>
              <l.Th>Meal Name</l.Th>
              <l.Th>Special Price</l.Th>
              <l.Th>Category</l.Th>
              <l.Th></l.Th>
            </l.Tr>
          </thead>
          <tbody>
            {props.data1.map((offer) => (
              <l.Tr>
                <l.Td>{offer.OfferName}</l.Td>
                <l.Td>{offer.SpecialPrice}</l.Td>
                <l.Td>{offer.Category}</l.Td>
                {user.Role === "Manager" || user.Role === "Admin" ? (
                  <Link to={`/ManagerView-Offer/${offer.id}`} className="btn">
                    <l.Icon>
                      <AiFillEye />
                    </l.Icon>
                  </Link>
                ) : null}
              </l.Tr>
            ))}
          </tbody>
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

export default AllOffersComponent;
