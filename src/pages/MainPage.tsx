import React from "react";
import Button2 from "../components/static/Button2";
import styled from "styled-components";

import img1 from "../assets/github-logo.svg";
import img2 from "../assets/invision-logo.svg";
import img3 from "../assets/coursera-logo.svg";
import img4 from "../assets/Kraft-Heinz-Logo.svg";
import img5 from "../assets/seismic-logo.svg";
import img6 from "../assets/goldman-sachs-logo.svg";
import im1 from "../assets/Andela_NewLogos.png";
import im2 from "../assets/Visual-3.png";
import { AiOutlineCheck } from "react-icons/ai";
import PeoCard from "../components/static/PeoCard";
import Button3 from "../components/static/Button3";

const MainPage = () => {
  const languages = [
    { name: "Python" },
    { name: "React Native" },
    { name: "Javascript" },
    { name: "Golang" },
    { name: "Salesforce" },
    { name: "Node.js" },
    { name: "vue.js" },
    { name: "Ruby" },
    { name: "Data Scientists" },
    { name: "Java" },
    { name: "Kotlin" },
    { name: "PHP" },
    { name: "C#" },
    { name: "React.Js" },
    { name: "Django" },
    { name: "Flask" },
    { name: "Android" },
    { name: "DevOps" },
    { name: "Swift" },
  ];

  const logoImages = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
  ];

  const stats = [
    { text: "Long-term placements" },
    { text: "Trusted career partner" },
    { text: "Career Guidance" },
    { text: "96% match success" },
  ];

  const peopleData = [
    {
      name: "Florence",
      location: "Kenya",
      color: "rgb(235,224,255)",
      description:
        "Skilled engineers, product managers, and designers at your fingertips. An extensive list of technical services to suit your business needs.",
    },
    {
      name: "Kaji",
      location: "Great Britain",
      color: "rgb(252,225,225)",
      description:
        "Skilled engineers, product managers, and designers at your fingertips. ",
    },
    {
      name: "Adetola",
      location: "Nigeria",
      color: "rgb(253,240,220)",
      description:
        "Skilled engineers, product managers, and designers at your fingertips. An extensive list of technical services to suit your business needs. Start building your world-class",
    },
    {
      name: "Rafael",
      location: "Brazil",
      color: "rgb(176,214,206)",
      description:
        "Skilled engineers, product managers, and designers at your fingertips. An extensive list of technical services to suit your business needs. ",
    },
    {
      name: "Adeyinka",
      location: "Nigeria",
      color: "rgb(253,240,220)",
      description:
        "Skilled engineers, product managers, and designers at your fingertips. An extensive list of technical services to suit your business needs. Start building.",
    },
  ];

  const cardItems = [
    { title: "110+", subtitle: "Countries represented on 6 continents" },
    { title: "96%", subtitle: "Successful placements" },
    { title: "84%", subtitle: "Increased income for Andelans" },
    { title: "175,000+", subtitle: "Technologists represented" },
    { title: "18+", subtitle: "Months Average engagement" },
  ];

  return (
    <div>
      <Container>
        <Label>
          <Main>
            <TextHold>
              <HeadText>
                {" "}
                Andela Launches New Platform to <i> Power the Future </i> of
                Customized Work{" "}
              </HeadText>
            </TextHold>

            <Button2 col={"#132128"} bg={"#56C870"} desc={"Find Out More"} />
          </Main>
        </Label>
        <LogoPart>
          <MainC>
            <HeadText>Trusted By</HeadText>
            <LogoHold>
              {logoImages.map((el) => {
                return <ImLogo src={el.img} />;
              })}
            </LogoHold>
          </MainC>
        </LogoPart>
        <Industry>
          <Mains>
            <ImLogo src={im1} height={"300px"} />
            <TextP>
              <SmT> Build your team today </SmT>
              <HeadText style={{ fontSize: "42px", marginTop: "10px" }}>
                {" "}
                We've cracked the code on creating engineering teams
              </HeadText>
              <Mmt>
                {" "}
                Skilled engineers, product managers, and designers at your
                fingertips. An extensive list of technical services to suit your
                business needs. Start building your world-class team faster with
                talent from Andela.
              </Mmt>
              <Button2 col={"#132128"} bg={"#56C870"} desc={"Find Out More"} />
            </TextP>
          </Mains>
        </Industry>
        <Industry>
          <Mains>
            <TextP style={{ width: "30%" }}>
              <SmT> Empower your future </SmT>
              <HeadText style={{ fontSize: "42px", marginTop: "10px" }}>
                {" "}
                Why the <i>world’s best talent</i> prefers Andela
              </HeadText>
              <TickHold>
                {stats.map((el) => {
                  return (
                    <div style={{ display: "flex", margin: "15px 0px" }}>
                      <Tick />
                      <Mmt style={{ margin: "0px" }}> {el.text}</Mmt>
                    </div>
                  );
                })}
              </TickHold>
              <Button2
                col={"#132128"}
                bg={"#56C870"}
                desc={"Find Text Experts"}
              />
            </TextP>
            <ImLogo
              src={im2}
              height={"400px"}
              style={{ marginRight: "150px" }}
            />
          </Mains>
        </Industry>
        <Industry>
          <MainC>
            <HeadText
              style={{
                fontSize: "42px",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              {" "}
              <i>Brilliant minds</i> and <i>companies</i> <br /> come together
              to build the future
            </HeadText>
            <br />
            <br />
            <CardHolder>
              {peopleData.map((el) => {
                return (
                  <PeoCard
                    name={el.name}
                    location={el.location}
                    description={el.description}
                    bgcol={el.color}
                  />
                );
              })}
            </CardHolder>
          </MainC>
        </Industry>
        <Industry>
          <MainC>
            <HeadText
              style={{
                fontSize: "42px",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              {" "}
              Welcome to the Future of <br />{" "}
              <i> meaningful, sustainable work </i>
            </HeadText>
            <Mmt style={{ textAlign: "center" }}>
              {" "}
              We believe that the sum is greater than our parts – our impact can
              be seen globally. We specialize in helping our highly-skilled,
              global technology talent community in emerging markets, connect
              with hundreds of leading companies{" "}
            </Mmt>

            <br />
            <br />

            <CardHolder
              style={{
                flexWrap: "wrap",
                display: "flex",
                justifyContent: "center",
              }}
            >
              {cardItems.map((el) => {
                return (
                  <BlueCard>
                    <BlueCardB> {el.title}</BlueCardB>
                    <BlueCardS> {el.subtitle}</BlueCardS>
                  </BlueCard>
                );
              })}
            </CardHolder>
            <ButtonHolder>
              <Button3
                col={"#132128"}
                bg={"white"}
                desc={"Apply for Remote Jobs"}
                bd={"1px solid black"}
              />
              <Button3
                col={"#132128"}
                bg={"#56C870"}
                desc={"Hire Talent"}
                bd={"1px solid none"}
              />
            </ButtonHolder>
          </MainC>
        </Industry>
        <Industry>
          <MainC>
            <HeadText
              style={{
                fontSize: "42px",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              {" "}
              <i> Anytime, anywhere </i> – with Andela, <br />
              the future of work is here
            </HeadText>
            <Mmt style={{ textAlign: "center" }}>
              Discover how leading companies have built impactful global teams
              with Andela
            </Mmt>

            <br />
            <br />

            <CardHolder
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Case>
                <TextP>
                  <Texti> Case Studies </Texti>
                  <TextB>
                    {" "}
                    Stax leverages Andela engineers to scale product features
                    and enhancements{" "}
                  </TextB>
                  <BText> Learn More</BText>
                </TextP>
                <Creat>
                  <Cirle h="1"></Cirle>
                  <Cirle h="0.9"></Cirle>
                </Creat>
              </Case>
              <Case style={{ backgroundColor: "#C95227" }}>
                <TextP>
                  <Texti> Case Studies </Texti>
                  <TextB>
                    {" "}
                    Stax leverages Andela engineers to scale product features
                    and enhancements{" "}
                  </TextB>
                  <BText> Learn More</BText>
                </TextP>
                <Creat>
                  <Cirle h="1" style={{ backgroundColor: "#F7B24F" }}></Cirle>
                  <Cirle h="0.9" style={{ backgroundColor: "#F7B24F" }}></Cirle>
                </Creat>
              </Case>
            </CardHolder>
            <br />
            <ButtonHolder>
              <Button3
                col={"#132128"}
                bg={"white"}
                desc={"All case studies"}
                bd={"1px solid black"}
              />
            </ButtonHolder>
          </MainC>
        </Industry>
        <Industry style={{ backgroundColor: "#EDEFF1", marginBottom: '0px'}}>
          <MainC>
            <p style={{marginTop: '50px'}}/>
            <SmT> Scale Faster with Andela </SmT>
            <HeadText
              style={{
                fontSize: "42px",
              }}
            >
              {" "}
              What skills will drive your vision?
            </HeadText>
            <Mmt style={{ textAlign: "center" }}>
              Discover how leading companies have built impactful global teams
              with Andela
            </Mmt>

            <br />
            <br />

            <CardHolders
              style={{
                display: "flex",
                flexDirection: 'row',
                justifyContent: "start",
                alignContent: "self-start",
                flexWrap: "wrap",
              }}
            >
              {languages.map((el) => {
                return <WideButton>{el.name}</WideButton>;
              })}
            </CardHolders>
          </MainC>
        </Industry>
      </Container>
    </div>
  );
};

const WideButton = styled.div`
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  border-radius: 30px;
  min-width: 250px;
  margin-right: 30px;
  padding-left: 20px;
  font-size: 18px;
  font-weight: 300;
  background-color: white;
  transition: ease-in-out 400ms;
  cursor: pointer;
  :hover {
    transform: scale(1.07);
  }
`;
const Creat = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
const Cirle = styled.div<{ h: string }>`
  height: 100%;
  width: 180px;
  border-radius: 0px 200px 200px 0px;

  background-color: rgb(153, 102, 255);
`;
const Case = styled.div`
  background-color: #4a1476;
  border-radius: 10px;
  margin-right: 20px;
  height: 350px;
  width: 600px;
  padding-left: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;
const Texti = styled.div`
  font-size: 16px;
  font-weight: 200;
  font-style: italic;
  font-family: Georgia, "Times New Roman", Times, serif;
`;
const TextB = styled.div`
  font-size: 20px;
  margin: 20px 0px;
  font-weight: 700;
`;
const BText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  padding: 8px 0px;
  border-radius: 30px;
  border: 1px solid white;
`;
const ButtonHolder = styled.div`
  display: flex;
`;
const BlueCardB = styled.div`
  font-size: 72px;
`;
const BlueCardS = styled.div`
  font-size: 16px;
  line-height: 1.5;
  width: 45%;
  text-align: center;
`;
const BlueCard = styled.div`
  height: 280px;
  border-radius: 10px;
  width: 385px;
  margin-right: 15px;
  margin-bottom: 15px;
  font-weight: 200;
  font-style: italic;
  background-color: rgb(176, 214, 206);
  color: rgb(19, 33, 40);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Tick = styled(AiOutlineCheck)`
  color: green;
  margin-right: 20px;
`;
const CardHolders = styled.div`
  display: flex;
  width: 100%;
`;
const CardHolder = styled.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`;
const TickHold = styled.div`
  font-size: 20px;
`;
const ImLogo = styled.img``;
const Mmt = styled.div`
  font-size: 18px;
  line-height: 1.5;
  margin: 20px 0px;
  font-weight: 300;
`;
const SmT = styled.div`
  font-weight: 600;
`;
const TextP = styled.div`
  width: 50%;
`;
const Industry = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: white;
  color: #132128;
  width: 100%;
  min-height: 500px;
  margin-bottom: 64px;
`;
const LogoHold = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: space-around;
  width: 100%;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;
const LogoPart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #e0f1eb;
  color: #132128;
  width: 100%;
  height: 200px;
`;
const Label = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: #173b3f;
  color: white;
  height: 170px;
`;
const TextHold = styled.div`
  width: 55%;
  margin-right: 150px;
`;
const Main = styled.div`
  width: 90%;
  display: flex;
`;
const Mains = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const MainC = styled.div`
  width: 90%;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const HeadText = styled.div`
  font-size: 35px;
  font-family: "Inria Serif", Garamond, serif;
`;
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``
// const Container = styled.div``

export default MainPage;
