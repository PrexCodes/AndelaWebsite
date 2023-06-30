import React from 'react'
import styled from 'styled-components'
import andlogo from '../../assets/AND-Logo-White.svg'
import {BsFacebook, BsTwitter, BsGithub, BsInstagram, BsYoutube, BsLinkedin} from 'react-icons/bs'
import sitim from '../../assets/2022-LevelAccess_Icon_White.png.webp'
const Footer = () => {

  const indA = [
    {icon: <BsFacebook/>},
    {icon: <BsTwitter/>},
    {icon: <BsGithub/>},
    {icon: <BsInstagram/>},
    {icon: <BsYoutube/>},
    {icon: <BsLinkedin/>},
  ]
  return (
    <div>
      <Container>
        <Main>
            <Left>
              <div>
              <Loogo src={andlogo}/>
              <IconPack>
                {indA.map((el)=>{
                  return(
                    <div>
                      {el.icon}
                    </div>
                  )
                })}
              </IconPack>
              <IconPack>
                <SitImg src={sitim}/>
              </IconPack>
              </div>
              <div>
              <LitText>
              © 2023 Andela. All rights reserved
              </LitText>
              </div>
            </Left>
            <Right>
              <List>
                <Ttext> Discover Talent</Ttext>
                <Stext> For Companies </Stext>
                <Stext> For Enterprise </Stext>
                <Stext> Case Studies </Stext>
              </List>
              <List>
                <Ttext> Find Work</Ttext>
                <Stext> For Technologists </Stext>
                <Stext> Learning Community </Stext>
                <Stext> Leadership Program </Stext>
                <Stext> Resources </Stext>
              </List>
              <List>
                <Ttext> Andela </Ttext>
                <Stext> About us </Stext>
                <Stext> Learning Community </Stext>
                <Stext> Leadership Program </Stext>
                <Stext> Resources </Stext>
              </List>
              <List>
                
                <Stext> Privacy Policy </Stext>
                <Stext> Learning Community </Stext>
                <Stext> Leadership Program </Stext>
                <Stext> Resources </Stext>
              </List>
            </Right>
        </Main>
      </Container>
    </div>
  )
}

export default Footer

const SitImg = styled.img`
height: 30px;
margin: 15px 0px;
margin-bottom: 60px;
`

const List = styled.div``
const Ttext = styled.div`
font-size: 15px;
font-weight: 700;
margin-bottom: 15px;
`
const Stext = styled.div`
margin-bottom: 15px;
font-size: 11.5px;
cursor: pointer;
:hover{
  text-decoration: underline;
}
`
const LitText = styled.div``
const IconPack = styled.div`
font-size: 24px;
display: flex;
width: 50%;
justify-content: space-between;
`
const Loogo = styled.img`
height: 60px;
margin-bottom: 30px;
`
const Container = styled.div`
display: flex;
justify-content: center;
align-items: start;
width: 100%;
height: 450px;
background-color: #173B3F;
font-size: 12px;
color: white
`
const Main = styled.div`
display: flex;

align-items: start;
width: 90%;
height: 80%;
padding-top: 100px;
`

const Left = styled.div`
width: 50%;
display: flex;
justify-content: center;
align-items: space-between;
flex-direction: column;


`
const Right = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: start;
`