import React from "react";
import styled from "styled-components";
import Title from "../atoms/Title/Title";
import Button from "../atoms/Button/Button";
import GameCard from "../molecules/GameCard";
import { games } from "../../data/GamesData";

const SectionWrapper = styled.section`
  padding: 5vw 10vw;
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px 5vw;
`;

const NewAddOnsSection = () => {
  return (
    <SectionWrapper>
      <HeadingWrapper>
        <Title level="h2">New Add-ons</Title>
        <Button>See all</Button>
      </HeadingWrapper>
      <GridWrapper>
        {games.map((item) => (
          <GameCard item={item} key={item.title} />
        ))}
      </GridWrapper>
    </SectionWrapper>
  );
};

export default NewAddOnsSection;
