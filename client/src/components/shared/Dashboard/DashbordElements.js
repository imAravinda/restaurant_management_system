import styled from "styled-components";
export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  background-color: #1a1e21;
  box-shadow: 3px 3px 3px #000;
  border-radius: 20px;
  margin: 5% 0;
  @media screen and (max-width: 800px) {
    width: 80%;
    margin-top: 20%;
  }
`;
export const SideNavBar = styled.div`
  width: 35%;
  background-color: #fdbe10cd;
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 4% 0;
  justify-content: center;
  @media screen and (max-width: 800px) {
    width: 100%;
    background-color: transparent;
  }
`;
export const UserMainContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 800px){
    flex-direction: column;
  }
`
export const UserHeader = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;
  margin: 3% 0;
`;
export const ImageSection = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50px;
  margin-right: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Image1 = styled.img`
   width: 70px;
  height: 70px;
  border-radius: 50px;
`
export const Title = styled.div`
  font-size: 30px;
  letter-spacing: 0.25rem;
  font-weight: 500;
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;
export const Name = styled.div`
  font-size: 18px;
  letter-spacing: 0.15rem;
  @media screen and (max-width: 800px) {
    font-size: 12px;
  }
`;
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  @media screen and (max-width: 800px) {
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
export const Header = styled.h2`
  background: linear-gradient(
    60deg,
    rgb(178, 108, 41) 0%,
    rgb(253, 190, 16) 100%
  );
  color: transparent;
  font-size: 4rem;
  text-transform: uppercase;
  font-family: "Lato", sans-serif;
  font-weight: 600;
  -webkit-background-clip: text;
  background-clip: text;
  letter-spacing: 1.5rem;
  @media screen and (max-width: 800px) {
    font-size: 24px;
    letter-spacing: 1rem;
  }
`;
export const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 65%;
  height: 100%;
`;
export const Cards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin-top: 5%;
`;

export const Navs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  margin-top: 5%;
  padding-left: 20%;
  @media screen and (max-width: 800px) {
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;
export const Nav = styled.div`
  & {
    display: flex;
    justify-content: space-between;
    align-items: left;
    width: 100%;
    height: 40px;
    margin-top: 2%;
    letter-spacing: 0.15rem;
  }
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 800px) {
    background: #fdbe10cd;
    align-items: center;
    width: 200px;
    margin: 3% 0;
    padding: 0 3%;
    border-radius: 10px;
  }
`;
export const Icon = styled.div`
  width: 20%;
`;
export const NavText = styled.div`
  width: 80%;
  color: #fff;
  font-size: 18px;
  @media screen and (max-width: 800px) {
    font-size: 12px;
    text-align: center;
  }
`;
export const Footer = styled.div`
  color: #fff;
  margin-top: 5%;
`;
export const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 150px;
  height: 150px;
  background: #000;
  margin: 0 2%;
  border-radius: 20px;
  box-shadow: 3px 3px 3px #fdbe10ad;
`;
export const CardIcon = styled.div`
  color: #fff;
  font-size: 45px;
`;
export const Count = styled.div`
  background: linear-gradient(
    60deg,
    rgb(178, 108, 41) 0%,
    rgb(253, 190, 16) 100%
  );
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  font-size: 25px;
  letter-spacing: 0.25rem;
  text-align: center;
  font-weight: 600;
  margin: 0;
`;
export const Text = styled.div`
  color: #fff;
  text-align: center;
`;
export const Pictures = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5%;
`;
export const Image = styled.img`
  width: 170px;
  height: 170px;
`;
export const Left = styled.div`
  width: 250px;
  height: 200%;
`;
export const Right = styled.div`
  width: 150px;
  height: 100%;
`;
