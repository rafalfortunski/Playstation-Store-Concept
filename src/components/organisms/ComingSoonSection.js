import React from "react";
import { theme, font } from "../../theme/mainTheme";
import { games } from "../../data/GamesData";
import GameCard from "../molecules/GameCard";
import Title from "../atoms/Title/Title";
import Button from "../atoms/Button/Button";
import styled from "styled-components";

const SectionWrapper = styled.section`
  background-color: ${theme.dark};
  padding: 3vw 10vw;
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3vw 0;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2.5vw 1.5vw;
`;

const ComingSoonSection = () => {
  return (
    <SectionWrapper>
      <HeadingWrapper>
        <Title level="h2" color={theme.white} fs={font.fs40} fw={theme.thin}>
          Coming soon
        </Title>
        <Button color={theme.lightgrey}>See all</Button>
      </HeadingWrapper>
      <GridWrapper>
        {games.slice(0, 4).map((item) => (
          <GameCard item={item} simpleCard />
        ))}
      </GridWrapper>
    </SectionWrapper>
  );
};

export default ComingSoonSection;
