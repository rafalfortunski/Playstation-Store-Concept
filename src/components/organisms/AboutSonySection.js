import React from "react";
import styled, { keyframes } from "styled-components";
import Title from "../atoms/Title/Title";
import Button from "../atoms/Button/Button";
import { theme, font } from "../../theme/mainTheme";
import Paragraph from "../atoms/Paragraph/Paragraph";
import cross from "../../PlayStationX.svg";
import square from "../../PlayStationSquare.svg";
import triangle from "../../PlayStationTriangle.svg";
import circle from "../../PlayStationCircle.svg";

const SectionWrapper = styled.section`
  display: grid;
  grid-template-columns: 0.6fr 0.8fr 1fr;
  padding: 5vw 10vw;
  background: ${theme.dark};
`;

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 6vw 1vw;
  justify-items: center;
  align-items: center;
`;

const Wrapper = styled.div`
  font-size: ${font.fs22};
  color: ${theme.lightgrey};
`;

const TriangleKeyframes = keyframes`
  0% {
    left: 0px;
    top: 0px;
  }
  20% {
    left: 12.45vw;
    top: 0px;
  }
  40% {
    left: 12.45vw;
    top: 12.45vw;
  }
  60% {
    left: 0px;
    top: 12.45vw;
  }
  80% {
    left: 0px;
    top: 0px;
  }
`;

const Triangle = styled.img`
  position: relative;
  animation: 3s ${TriangleKeyframes} infinite;
`;

const CircleKeyframes = keyframes`
  0% {
    left: 0px;
    top: 0px;
  }
  20% {
    left: 0px;
    top: 12.45vw;
  }
  40% {
    left: -12.45vw;
    top: 12.45vw;
  }
  60% {
    left: -12.45vw;
    top: 0px;
  }
  80% {
    left: 0px;
    top: 0px;
  }
`;

const Circle = styled.img`
  position: relative;
  animation: 3s ${CircleKeyframes} infinite;
`;

const SquareKeyframes = keyframes`
  0% {
    left: 0px;
    top: 0px;
  }
  20% {
    left: 0px;
    top: -12.45vw;
  }
  40% {
    left: 12.45vw;
    top: -12.45vw;
  }
  60% {
    left: 12.45vw;
    top: 0px;
  }
  80% {
    left: 0px;
    top: 0px;
  }
`;

const Square = styled.img`
  position: relative;
  animation: 3s ${SquareKeyframes} infinite;
`;

const CrossKeyframes = keyframes`
  0% {
    left: 0px;
    top: 0px;
  }
  20% {
    left: -12.45vw;
    top: 0px;
  }
  40% {
    left: -12.45vw;
    top: -12.45vw;
  }
  60% {
    left: 0px;
    top: -12.45vw;
  }
  80% {
    left: 0px;
    top: 0px;
  }
`;

const Cross = styled.img`
  position: relative;
  animation: 3s ${CrossKeyframes} infinite;
`;

const CustomButton = styled(Button)`
  margin: 50px;
  font-size: ${font.fs12};
`;

const AboutSonySection = () => {
  return (
    <SectionWrapper>
      <Title level="h2" color={theme.white} fw={theme.thin} fs={font.fs40}>
        About Sony
      </Title>
      <ButtonsWrapper>
        <Triangle src={triangle} alt="" width="60%" />
        <Circle src={circle} alt="" width="60%" />
        <Square src={square} alt="" width="60%" />
        <Cross src={cross} alt="" width="60%" />
      </ButtonsWrapper>

      <Wrapper>
        <Paragraph>
          Check out the latest news fot the PS4, read interesting articles and
          find out what awaits you this month.
        </Paragraph>
        <CustomButton circle>read more</CustomButton>
      </Wrapper>
    </SectionWrapper>
  );
};

export default AboutSonySection;
