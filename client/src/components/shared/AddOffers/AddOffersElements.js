import styled from "styled-components";
export const FormSection= styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50rem;
  height: 30rem;
  background-color: #1a1e21;
  border-radius: 25px;
  box-shadow: 3px 3px 3px #000;
  margin: 0 0 5% 0;


  /**responsive */
  @media screen and (max-width: 769px) {
    width: 100%;
    flex-direction:column-reverse;
    padding-top: 2%;
  }

`
export const LeftSide= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    margin: 0 5%;

    @media screen and (max-width: 769px) {
    width: 90%;
    height: 350px;
    padding: 0 10px;
  }
`
export const SubSection= styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 5%;


    @media screen and (max-width: 769px) {
    font-size:80%;
  }
`
export const RightSide= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: flex-end;
    width: 50%;
    margin: 0 5%;

    @media screen and (max-width: 769px) {
    justify-content:center;
    align-items: center
  }

`
export const ImageSection= styled.div`
    width: 250px;
    height: 250px;
    border-radius: 20px;
    margin-bottom: 5%;

    @media screen and (max-width: 769px) {
    width:125px;
    height:125px;
    
  }

`
export const ImageSubSec = styled.div`
  width: 250px;
  height: 250px;
  margin: 5%;
  border-radius: 20px;
  display: flex;
  background-color: #fff;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 769px) {
    width:125px;
    height:125px
  }
`
export const Image = styled.img`
  width: 250px;
  height: 250px;

  @media screen and (max-width: 769px) {
    width: 125px;
    height: 125px;
  }

`

export const Icon = styled.label`
  &{
    width: fit-content;
  height: fit-content;
  border-radius: 50px;
  background-color:#FFBF00;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  padding: 5%;
  position: relative;
  top:-25%;
  left: 0%;
  color: #fff;
  }
  &:hover{
    cursor: pointer;
  }
`
export const ButtonSection = styled.div`
    position: relative;
    margin-top: 5%;
    width: 40%;
    display: flex;
    justify-content: right;
    @media screen and (max-width: 769px) {
    margin-top:20px;
  }
`
export const ButtonSection1 = styled.div`
    position: relative;
    left: -20%;
    top: -2%;
`