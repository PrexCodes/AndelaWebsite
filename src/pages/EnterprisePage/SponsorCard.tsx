import React from 'react'
import styled from 'styled-components'
import img from "../../assets/logo-github-1.png"
import img1 from "../../assets/logo-invision-1.png"
import img2 from "../../assets/logo-coursera.png"
import img3 from "../../assets/logo-kraft-heinz-1.png"
import img4 from "../../assets/logo-seismic-1.png"
import img5 from "../../assets/logo-goldman-sachs.png"

const SponsorCard = () => {
  return (
    <div>
      <Bottom>
          <Main1>
            <Title>We’re trusted by the best</Title>
         <Holder>
         <Img src={img}/>
            <Img src={img1}/>
            <Img src={img2}/>
            <Img src={img3}/>
            <Img src={img4}/>
            <Img src={img5}/>
            <Img src={img5}/>
            <Img src={img5}/>
            <Img src={img5}/>
         </Holder>
          </Main1>
        </Bottom>
    </div>
  )
}

export default SponsorCard

const Img = styled.img`
width: 250px;
`
const Holder = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
overflow: hidden;
`
const Title = styled.div`
font-size: 30px;
margin-bottom: 30px;
`
const Text = styled.div`
  width: 550px;
  font-size: 32px;
  font-weight: 400;
`;
const Bottom = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e0f1eb;
`;

const Main1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;