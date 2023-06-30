import React, { useState } from "react";
import styled from "styled-components";
import andela from "../../assets/AND-Logo-Lockup-Green-Black-RGB.svg";
import andelaw from "../../assets/AND-Logo-White.svg";
import { BsChevronDown } from "react-icons/bs";
import Button1 from "../static/Button1";
import {NavLink} from 'react-router-dom'

const Header = () => {
  const [scroll, setScroll] = useState<boolean>(true);

  const onScroll = () => {
    if (window.scrollY >= 70) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", onScroll);

  return (
    <div>
      <Container1>
        <Main>
          <BigText> Andela acquires Qualified.io and Codewars </BigText>
          <SMText> Learn More </SMText>
        </Main>
      </Container1>
      {scroll ? (
        <Container3>
          <Main1>
            <Logo src={andela} />
            <NavBar>
              <NavLinks to={"/"} style={{color: 'black'}}> <Nav> For Technology Experts</Nav> </NavLinks>
              <Nav> Business </Nav>
              <NavLinks to={"/enterprise"} style={{color: 'black'}}> <Nav> Enterprise </Nav></NavLinks>
            </NavBar>
            <NavBar>
              <Nav> Apply for Jobs </Nav>
              <Button1 col={"#132128"} bg={"#56C870"} desc={"Hire Talent"} />
              <Nav>
                {" "}
                Login
                <IconDown />
              </Nav>
            </NavBar>
          </Main1>
        </Container3>
      ) : (
        <Container2>
          <Main1>
            <Logo src={andelaw} />
            <NavBar>
              <NavLinks to={"/"} style={{color: 'white'}}> <Nav> For Technology Experts</Nav> </NavLinks>
              <Nav> Business </Nav>
              <NavLinks to={"/enterprise"} style={{color: 'white'}}> <Nav> Enterprise </Nav></NavLinks>
            </NavBar>
            <NavBar>
              <Nav> Apply for Jobs </Nav>
              <Button1 col={"#132128"} bg={"#56C870"} desc={"Hire Talent"} />
              <Nav>
                {" "}
                Login
                <IconDown />
              </Nav>
            </NavBar>
          </Main1>
        </Container2>
      )}
    </div>
  );
};

export default Header;

const NavLinks = styled(NavLink)`
text-decoration: none;
`

const IconDown = styled(BsChevronDown)`
  font-size: 12px;
  margin-top: 3px;
  margin-left: 3px;
`;
const NavBar = styled.div`
  display: flex;
`;
const Nav = styled.div`
  margin-right: 25px;
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  height: 50px;
`;

const BigText = styled.div`
  font-weight: 700;
  margin-right: 20px;
  font-size: 20px;

  /* font-size: 20px; */
`;
const SMText = styled.div`
  font-size: 18px;
  font-weight: 500;
`;
const Container1 = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.05) 1.95px 1.95px 2.6px;
  background-color: whitesmoke;
  position: fixed;
  z-index: 2;
`;
const Main1 = styled.div`
  width: 95%;
  

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Main = styled.div`
  width: 95%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container3 = styled.div`
  margin-top: 60px;
  color: black;
  margin-bottom: 80px;
  background-color: white;
  height: 80px;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  box-shadow: rgba(0, 0, 0, 0.05) 1.95px 1.95px 2.6px;
`;
const Container2 = styled.div`
  margin-top: 80px;
  margin-bottom: 80px;
  height: 80px;
  z-index: 2;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  color: white;
`;
