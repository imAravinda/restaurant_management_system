import React from 'react'
import { faEnvelope, faPhoneFlip, faLocationDot, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { Heading } from '../Deals/DealsElements'

const ContactUs = () => {
    const Div = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        height: 100%;
        padding: 3% 0;
        @media screen and (max-width:800px){
            margin: 0;
        }
    `
    const H1 = styled.h1`
        letter-spacing: 0.2em;
        font-size: 40px;
        font-weight: 500;
        text-align: center;
        color: #fff;
        @media screen and (max-width:800px){
            font-size: 20px;
        }
    `
    const MainSubSec = styled.div`
        display: flex;
        justify-content: space-around;
        @media screen and (max-width:800px){
            margin: 0;
        }
    `
    const Sec = styled.div`
        flex-basis: 100%;
        margin: 20px 10px;
        width: 100%;
        
    `
    const SubSec = styled.div`
        width: 20vw;
        margin: 15px;
        text-align: center;
        @media screen and (max-width:800px){
            margin: 5px;
        }
    `
    const Icon = styled.div`
        font-size: 40px;
        margin: 10px 10px 45px 10px;
        color: #C98621;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width:800px){
            font-size: 40px;
            margin: 0;
        }
    `
    const H2 = styled.h2`
        margin: 10px 10px 20px 10px;
        color: #fff;
        @media screen and (max-width:800px){
            font-size: 15px;
        }
    `
    const P = styled.p`
        font-size: 18px;
        color: #fff;
        text-align: center;
        @media screen and (max-width:800px){
            font-size: 12px;
        }
    `
    return ( 
        <Div>
            <Sec>
                <Heading>CONTACT US</Heading>
                <H1>Get In Touch</H1>
            </Sec>
            <Sec>
                <MainSubSec>
                    <SubSec>
                        <Icon>
                            <FontAwesomeIcon icon = {faEnvelope}/>
                        </Icon>
                        <H2>Chat With Us On</H2>
                        <P>+94 77 777 7777 <br/> +94 77 777 7777</P>
                    </SubSec>
                    <SubSec>
                        <Icon>
                            <FontAwesomeIcon icon = {faPhoneFlip}/>
                        </Icon>
                        <H2>Call To Us On</H2>
                        <P>+94 77 777 7777 <br/> +94 77 777 7777</P>
                    </SubSec>
                    <SubSec>
                        <Icon>
                            <FontAwesomeIcon icon = {faLocationDot}/>
                        </Icon>
                        <H2>Find Us On</H2>
                        <P>No.999 <br/> Unknown Street <br/> Main City</P>
                    </SubSec>
                    <SubSec data-aos="zoom-up">
                        <Icon>
                            <FontAwesomeIcon icon = {faClock}/>
                        </Icon>
                        <H2>Openning Hours</H2>
                        <P>Week Days - 8:00 am to 10:00 pm</P>
                        <P>Weekend - 8:00 am to 8.00 pm</P>
                    </SubSec>
                </MainSubSec>
            </Sec> 
        </Div>
     );
}
 
export default ContactUs;
