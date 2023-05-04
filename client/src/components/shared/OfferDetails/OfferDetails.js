import { useState } from "react";
import { FormButton, RegularButton } from "../SharedElements/Buttons";
import { Container, Header } from "../SharedElements/SharedElements";
import * as l from "./OfferDetailsElements";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { toast } from "react-hot-toast";
import axios from "axios";
const OfferDetails = (props) => {
  console.log(props.offer);
  const [OfferName, setOfferName] = useState(props.offer.OfferName);
  const [SpecialPrice, setSpecialPrice] = useState(props.offer.SpecialPrice);
  const [Category, setCategory] = useState(props.offer.Category);
  const [Status, setStatus] = useState(props.offer.Status);
  const { user } = useAuth();

  const {id} = useParams();
    console.log(id);
    const update = async (e)=>{
        e.preventDefault();
        try {
            const Data = {OfferName,Category,SpecialPrice,Status}
            console.log(Data);
            await toast.promise(
                axios.patch(`/api/v1/Offer/${id}`,Data),
                {
                    loading:'Offer is Updating....',
                    success:(data)=>{
                        return ` ${data.data?.message} ` || "success";
                    },
                    error: (err) => `${err.response.data.message}`,
                },
                {
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff',
                        fontSize:'1rem',
                        zIndex:'99999999',
                    },
                }

            )

        } catch (error) {
            console.log(error.message);
        }
    };
  return (
    <Container>
      <Header>Food Details</Header>
      <l.Div onSubmit={update}>
        <l.Div1>
          <l.Img
            src={`http://localhost:5000/offerimages/${props.offer.OfferImage}`}
          ></l.Img>
          <l.TextSection>
            <l.Text>Offer Name</l.Text>
            <l.TextFeild
              type="text"
              placeholder="Name"
              value={OfferName}
              onChange={(e) => setOfferName(e.target.value)}
            />
          </l.TextSection>
          <l.TextSection>
            <l.Text>Category</l.Text>
            <l.TextFeild
              type="text"
              placeholder="Category"
              value={Category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </l.TextSection>
          <l.TextSection>
            <l.Text>Special Price</l.Text>
            <l.TextFeild
              type="text"
              placeholder="Price"
              value={SpecialPrice}
              onChange={(e) => setSpecialPrice( e.target.value)}
            />
          </l.TextSection>
          <l.RadioButtonSection>
            <l.RadioButton>
              <l.Radio
                type="radio"
                name="Availablility"
                value="Available"
                onChange={(e) => setStatus(e.target.value)}
                checked={Status === "Available" ? true : false}
              />
              <l.Label>Available</l.Label>
            </l.RadioButton>
            <l.RadioButton>
              <l.Radio
                type="radio"
                name="Availablility"
                value="Not Available"
                onChange={(e) => setStatus(e.target.value)}
                checked={Status === "Not Available" ? true : false}
              />
              <l.Label>Not Available</l.Label>
            </l.RadioButton>
          </l.RadioButtonSection>
        </l.Div1>
        <l.Div2>
          <l.Sec>
            <FormButton>Update</FormButton>
          </l.Sec>
        </l.Div2>
      </l.Div>
      <l.Div3>
        <Link to="/ManagerView-Offers" className="btn">
          <RegularButton>Back</RegularButton>
        </Link>
      </l.Div3>
    </Container>
  );
};

export default OfferDetails;
