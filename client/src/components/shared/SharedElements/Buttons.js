import styled from "styled-components";
export const RegularButton = styled.button`
  width: 150px;
  height: 40px;
  color: #fff;
  background: linear-gradient(to right, #ffbf00, #b26c29);
  border: none;
  cursor: pointer;
  position: relative;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  @media screen and (max-width: 800px) {
    width: 100px;
    height: 30px;
    font-size: 12px;
  }
`;
export const FormButton = styled.button`
  position: relative;
  background: linear-gradient(to right, #ffbf00, #b26c29);
  border-radius: 20px;
  border: none;
  font-size: 16px;
  color: #fff;
  font-style: none;
  cursor: pointer;
  width: 80%;
  padding: 0 5%;
  margin: 0 2%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 500;
  @media screen and (max-width: 800px) {
    width: 100px;
    height: 30px;
    font-size: 12px;
  }
`;
export const UploadButton = styled.div`
  height: 40px;
  color: #fff;
  background: linear-gradient(to right, #ffbf00, #b26c29);
  border: none;
  cursor: pointer;
  position: relative;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  text-transform: uppercase;
  @media screen and (max-width: 800px) {
    width: 100px;
    height: 30px;
    font-size: 12px;
  }
`;
