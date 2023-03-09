import useFetch from "../../../Hooks/useFetch";
import { RegularButton } from "../SharedElements/Buttons";
import { Container, Header } from "../SharedElements/SharedElements";
import Spinner from "../Spinner/Spinner";
import * as l from './FoodDetailsElements'
import { AiFillEye } from 'react-icons/ai';
import useAuth from "../../../Hooks/useAuth";
const FoodDetails = (props) => {
    return ( 
        <Container>
            <Header>
                Food Details
            </Header>
                <l.SubContainer>
                    <l.Table>
                        <l.Tr>
                            <l.Th>Name</l.Th>
                            <l.Th>Category</l.Th>
                            <l.Th>Price</l.Th>
                            <l.Th>Status</l.Th>
                            <l.Th></l.Th>
                        </l.Tr>
                        {
                            props.data1.map(row=>{
                                return(
                                    <l.Tr>
                                        <l.Td>{row.FoodName}</l.Td>
                                        <l.Td>{row.Category}</l.Td>
                                        <l.Td>{row.Price}</l.Td>
                                        <l.Td>{row.Status}</l.Td>
                                        <l.Icon><AiFillEye/></l.Icon>
                                    </l.Tr>
                                )
                            })
                        }
                    </l.Table>
                </l.SubContainer>
            <l.ButtonSection>
                <RegularButton>
                    Back
                </RegularButton>
            </l.ButtonSection>
        </Container>
     );
}
 
export default FoodDetails;