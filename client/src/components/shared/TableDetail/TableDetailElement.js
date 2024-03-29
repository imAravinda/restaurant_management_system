import styled from "styled-components";

export const Div = styled.form`
  width: 50%;
  height: 50%;
  background-color: #1a1e21;
  border-radius: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 3px 3px 3px #000;
  padding: 3% 0;
  /* margin-top: 10%; */
  @media screen and (max-width: 769px) {
    width: 90%;
    height: 350px;
  }
`;
export const Text = styled.div`
  color: #fff;
  display: flex;
  justify-content: left;
  text-align: left;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
`;
export const TextSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  justify-content: center;
  align-items: center;
`;
export const H1 = styled.h1`
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(
    60deg,
    rgb(178, 108, 41) 0%,
    rgb(253, 190, 16) 100%
  );
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  letter-spacing: 1rem;
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin-top: 10px;
  flex-direction: column;
  height: 80%;
  width: 60%;
`;
export const Div2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2% 0;
  width: 60%;
`;

export const Sec = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Div3 = styled.div`
  margin-top: 15px;
  width: 50%;
  height: 8%;
  display: flex;
  flex-direction: column;
`;

export const Searchbar = styled.input`
  width: 100%;
  margin-bottom: 5px;
  padding: 6px;
  border: none;
  border-radius: 20px;
  font-size: 12px;
  box-shadow: 3px 3px 3px #000;
`;

export const TextFeild = styled.input`
  margin: 2%;
  width: 100%;
  height: 30px;
  border-radius: 30px;
  padding: 1% 5%;
`;
