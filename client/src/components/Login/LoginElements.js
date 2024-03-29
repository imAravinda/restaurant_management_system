import styled from "styled-components";
import { Link } from "react-router-dom";
export const Page = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    margin-bottom: 25%;
  }
`;
export const Container = styled.div`
  background-color: #1a1e21;
  display: flex;
  width: 79%;
  margin-top: 6%;
  box-shadow: 3px 3px 3px #000;
  height: 85%;
  border-radius: 20px;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    width: 90%;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 12%;
    height: 100%;
  }
`;
export const LoginPage = styled.div`
  width: 50%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2% 0;
  @media screen and (max-width: 769px) {
    width: 90%;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    height: 350px;
  }
`;
export const Heading = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Logo = styled.h1`
  color: #fff;
  margin: 2% 0;
  padding: 0;
  position: relative;
  top: 5%;
  @media screen and (max-width: 800px) {
    top: 18%;
    margin: 0;
  }
`;
export const Title = styled.h2`
  color: #fff;
  text-transform: uppercase;
  border-bottom: 2px solid #fff;
  letter-spacing: 0.1rem;
  position: relative;
  top: -20%;
  @media screen and (max-width: 800px) {
    top: -15%;
  }
`;
export const TextArea = styled.form`
  width: 80%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -5%;
`;
export const Label = styled.label`
  font-size: 1.5em;
  color: #fff;
  margin: 1em 0 0.5rem 0;
  letter-spacing: 0.1rem;
  .UpperLabel {
    margin-top: 0;
  }
  @media screen and (max-width: 769px) {
    font-size: 20px;
  }
`;
export const Input = styled.input`
  height: 40px;
  width: 70%;
  padding: 0 3%;
  margin: 3% 0;
  border-radius: 20px;
  border: none;
  @media screen and (max-width: 769px) {
    width: 200px;
    height: 25px;
    font-size: 12px;
  }
`;
export const ForgotPWD = styled.div`
  width: 70%;
  text-align: right;
  color: #b26c29;
  font-size: 100%;
  position: relative;
  top: -8%;
  margin: 0;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 769px) {
    font-size: 12px;
    top: -3%;
  }
`;
export const Bottom = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 769px) {
    font-size: 12px;
  }
`;
export const StyledLink = styled(Link)`
  font-size: 1.2em;
  text-decoration: none;
  color: #fff;
  @media screen and (max-width: 800px) {
    font-size: 14px;
  }
`;
export const Option = styled.div`
  color: #fff;
  font-size: 100%;
  margin: 0 2%;
  @media screen and (max-width: 769px) {
    font-size: 12px;
  }
`;
export const LinkToSignUpAndLogIn = styled.a`
  color: #b26c29;
  &:hover {
    cursor: pointer;
  }
`;
export const ImageSection = styled.div`
  width: 50%;
  overflow: hidden;
  @media screen and (max-width: 769px) {
    width: 100%;
    overflow: hidden;
    height: 300px;
  }
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  @media screen and (max-width: 800px) {
    border-bottom-left-radius: 20px;
    border-top-right-radius: 0px;
    height: 300px;
  }
`;
export const SignUpPage = styled.div`
  width: 50%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2% 0;
  @media screen and (max-width: 769px) {
    width: 90%;
    border-bottom-left-radius: 0px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    height: 350px;
  }
`;
export const TextAreaSignUp = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 90%;
  position: relative;
  top: -10%;
`;
export const Column = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0% 5% 10% 5%;
`;
export const LabelSignUp = styled.label`
  font-size: 1.2em;
  color: #fff;
  margin: 1em 0 0.5rem 0;
  letter-spacing: 0.1rem;
  .UpperLabel {
    margin-top: 0;
  }
  @media screen and (max-width: 1010px) {
    font-size: 0.8em;
  }
`;
export const InputSignUp = styled.input`
  height: 40px;
  width: 80%;
  margin: 2% 0;
  padding: 0 5%;
  border-radius: 20px;
  border: none;
  @media screen and (max-width: 769px) {
    width: 90%;
    height: 25px;
    font-size: 12px;
  }
`;
export const IMG = styled.img`
  width: 150px;
  height: 150px;
  @media screen and (max-width: 769px) {
    width: 75px;
    height: 75px;
  }
`;
export const SocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 3%;
  @media screen and (max-width: 800px) {
    margin-top: 0;
  }
`;
export const Icon = styled.div`
  & {
    margin: 0 5%;
    width: 30px;
    height: 30px;
    font-size: 28px;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.3);
    transition: 0.5 ease-out;
  }
  @media screen and (max-width: 800px) {
    font-size: 18px;
  }
`;
