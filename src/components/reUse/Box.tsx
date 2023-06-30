import React from "react";
import styled from "styled-components";

interface iBox{
    title?: string;
    text?: string;
}

const Box: React.FC <iBox>= ({title, text}) => {
  return (
    <div>
      <Container>
        <Main>
          <Title>{title}</Title>
          <Text>
      {text}
          </Text>
        </Main>
      </Container>
    </div>
  );
};

export default Box;

const Text = styled.div``;
const Title = styled.div`
font-size: 25px;
margin-bottom: 30px;
`;
const Main = styled.div`
width: 95%;
height: 90%;
/* background-color: blue; */
`;
const Container = styled.div`
width: 280px;
height: 250px;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px;
`;
