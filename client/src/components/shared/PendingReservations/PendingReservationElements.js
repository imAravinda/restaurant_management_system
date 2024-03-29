import styled from "styled-components";
export const SubContainer = styled.div`
  display: flex;
  width: 60%;
  overflow-x: auto;
  background: #1a1e21;
  border-radius: 20px;
  box-shadow: 3px 3px 3px #000;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 769px) {
    width: 90%;
    overflow: scroll;
  }
`;
export const GridContainer = styled.div`
  width: 100%;
  margin: 5%;
`;
export const ButtonSection = styled.div`
  position: relative;
  left: -25%;
  top: 2%;
`;
export const Table = styled.table`
  color: #fff;
  margin: 3%;
  border-radius: 10px;
  width: 80%;
  @media screen and (max-width: 769px) {
    display: flex;
    width: 100%;
    overflow-x: scroll;
  }
`;
export const Tr = styled.tr`
  border: 2px solid #fff;
  text-align: left;
  @media screen and (max-width: 769px) {
    display: flex;
    flex-direction: column;
    border: none;
    padding: 10px;
  }
`;
export const Th = styled.th`
  border-bottom: 2px solid #fff;
  @media screen and (max-width: 769px) {
    margin-bottom: 10px;
    border-bottom: 1px solid white;
    padding-bottom: 10px;
    max-height: 25px;
    min-height: 25px;
    overflow: hidden;
    font-size: 80%;
    &:last-child {
      border-bottom: none;
    }
  }
`;
export const Td = styled.td`
  @media screen and (max-width: 769px) {
    margin-bottom: 10px;
    border-bottom: 1px solid white;
    padding-bottom: 10px;
    min-height: 25px;
    max-height: 25px;
    overflow: hidden;
    font-size: 80%;
    display: inline-block;
    /* padding-right:5px */
    &:last-child {
      border-bottom: none;
    }
  }
`;
export const Icon = styled.div`
  & {
    color: #ffbf00;
  }
  &:hover {
    cursor: pointer;
  }
`;
