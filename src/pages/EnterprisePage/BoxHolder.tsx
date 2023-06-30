import React from "react";
import styled from "styled-components";
import Box from "../../components/reUse/Box";

const BoxHolder = () => {
  return (
    <div>
      <Container>
        <Main>
            <Title>We create winning teams</Title>
            <Text>We help you source, evaluate, and hire specialized talent compliant with local laws in 100 countries.</Text>
            <BoxHold>
                <Box title="Source" text="We’ll work with you to fully understand your technical gaps, culture, industry regulations, and strategic route. Instantly view a curated selection of technologist profiles that meet your needs."/>
                <Box title="Assess" text="Our proprietary assessments are designed to find you the best talent by role, no matter where they are in the world. Based on your team’s goals, meet vetted technologists you can trust."/>
                <Box title="Delivery" text="With a focus on sustainable growth, we’re with you every step of the way. From rapid onboarding and seamless integration to global payroll solutions and compliance support."/>
                <Box title="Match" text="Connect within hours, with vetted technologists who can easily align with your existing teams, tools, and workflows. Our matching times are consistently twice as fast compared to industry standards."/>
            </BoxHold>
        </Main>
      </Container>
    </div>
  );
};

export default BoxHolder;

const BoxHold = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`;
const Text = styled.div`
font-size: 20px;
margin-bottom: 10px;

`;
const Title = styled.div`
font-size: 40px;
font-weight: 400;
margin-bottom: 10px;
`;
const Main = styled.div`
width: 90%;
height: 95%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
/* background-color: red; */
`;
const Container = styled.div`
width: 100%;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
background-color:#f8f8f8 ;
`;
