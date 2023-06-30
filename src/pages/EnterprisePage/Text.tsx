import React from "react";
import styled from "styled-components";

const Text = () => {
  return (
    <div>
      <Container>
        <Main>
          <Title>Let’s help you add value to your business</Title>
          <Text1>Discover our global neighborhood of technologists.</Text1>
        </Main>
      </Container>
    </div>
  );
};

export default Text;

const Title = styled.div`
font-size: 40px;
font-weight: 400;
margin: 20px 0;
`;
const Text1 = styled.div`
font-size: 20px;
`;
const Main = styled.div`
  width: 90%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
