import React from "react";
import styled from "styled-components";
// import Header from "../../components/Static/Header";
import img from "../../assets/toby-osborn-ilHo9qgDEGY-unsplash-scaled.jpg";
import GlobalButton from "../../components/reUse/GlobalButton";

const Heropage = () => {
  return (
    <div>
      <Container>
        
        <Image src={img} />
        <Main>
            <TextHolder>
                <BigText>We’re here to help you build a world class team, today.</BigText>
                <SmallText>
                Trusted by enterprise teams and growing startups alike, Andela’s onboarding times are 70% faster than the industry average.
                </SmallText>
                <ButtonHolder>
                <GlobalButton width="200px" height="60px" brad="50px" bg="white" title="Schedule a Call" />
                <GlobalButton width="250px" height="60px" brad="50px" bg="#56c870" title="Watch an Overview"/>
                </ButtonHolder>
            </TextHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Heropage;

const ButtonHolder =styled.div`
display: flex;
margin: 20px 0;
/* background-color: blue; */
width: 470px;
justify-content: space-between;
`
const SmallText =styled.div`
font-size: 20px;
`
const BigText =styled.div`
font-size: 40px;
font-weight: 400;
`
const TextHolder =styled.div`
width: 1100px;
height: 250px;
/* background-color: red; */
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  position: static;
  top: 0;
`;
const Main = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgb(69,98,101, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;
