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
`;
export const Tr = styled.tr`
  border: 2px solid #fff;
  text-align: left;
`;
export const Th = styled.th`
  border-bottom: 2px solid #fff;
`;
export const Td = styled.td``;
export const Icon = styled.div`
  & {
    color: #ffbf00;
  }
  &:hover {
    cursor: pointer;
  }
`;
