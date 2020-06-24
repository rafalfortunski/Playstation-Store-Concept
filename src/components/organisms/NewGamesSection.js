import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Button from "../atoms/Button/Button";
import Title from "../atoms/Title/Title";
import { theme } from "../../theme/mainTheme";
import GameCard from "../molecules/GameCard";
import NewSlider from "../organisms/NewSlider";

const NewGamesWrapper = styled.section`
  display: grid;
  grid-template-columns: 0.3fr 1fr;
  position: relative;
  overflow: hidden;
  padding: 3vw 0 3vw 10vw;
`;

const SliderWrapper = styled.div`
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 0;
`;

const NewGamesSection = ({ games, ...props }) => {
  return (
    <NewGamesWrapper>
      <Wrapper>
        <Title level="h2">New games</Title>
        <Button circle color={theme.blue}>
          See all
        </Button>
      </Wrapper>
      <SliderWrapper>
        <NewSlider>
          {games.slice(0, 6).map((item) => (
            <GameCard item={item} />
          ))}
        </NewSlider>
      </SliderWrapper>
    </NewGamesWrapper>
  );
};

const mapStateToProps = ({ games }) => ({ games });

export default connect(mapStateToProps)(NewGamesSection);
