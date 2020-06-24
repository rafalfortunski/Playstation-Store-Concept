import React from "react";
import styled from "styled-components";
import GameCard from "../molecules/GameCard";
import { games } from "../../data/GamesData";
import InlineText from "../atoms/InlineText/InlineText";
import { theme, font } from "../../theme/mainTheme";
import Button from "../../components/atoms/Button/Button";
import Checkbox from "../molecules/Checkbox";

const SectionWrapper = styled.section`
  padding: 5vw 10vw;
  background-color: ${(props) => props.theme.bg};
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px 5vw;
`;

const FormWrapper = styled.div`
  border-top: 1px solid ${(props) => props.theme.third};
  border-bottom: 1px solid ${(props) => props.theme.third};
  padding: 20px 0;
  margin: 5vw 0;
  display: grid;
  grid-template-columns: 0.5fr 1fr 0.5fr 0.5fr;
  grid-column-gap: 3vw;
`;

const FilterWrapper = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledSelect = styled.select`
  background-color: transparent;
  color: ${(props) => props.theme.second};
  padding: 10px 3px;
`;
const StyledOption = styled.option`
  padding: 10px 3px;
  background-color: ${theme.dark};
  :hover {
    background-color: ${theme.dark};
  }
`;

const GamesListSection = () => {
  return (
    <SectionWrapper>
      <FormWrapper>
        <StyledSelect>
          <StyledOption>0.00 - 19.00$</StyledOption>
          <StyledOption>20.00$ - 39.99$</StyledOption>
          <StyledOption>40.00$ - 59.99$</StyledOption>
          <StyledOption>{"60.00$ < "}</StyledOption>
        </StyledSelect>
        <FilterWrapper>
          <Wrapper>
            <InlineText color={theme.grey} fs={font.fs12} margin="0 25px 0 0;">
              DEVICE
            </InlineText>
            <Button color={theme.lightgrey}>clear</Button>
          </Wrapper>
          <Wrapper>
            <Checkbox name="ps4">PS4™</Checkbox>
            <Checkbox name="ps3">PS3™</Checkbox>
            <Checkbox name="psp">PSP</Checkbox>
            <Checkbox name="ps-vita">PS Vita</Checkbox>
          </Wrapper>
        </FilterWrapper>
        <FilterWrapper>
          <Wrapper>
            <InlineText color={theme.grey} fs={font.fs12} margin="0 25px 0 0;">
              MEDIA TYPES
            </InlineText>
            <Button color={theme.lightgrey}>clear</Button>
          </Wrapper>
          <Wrapper>
            <Checkbox name="game">Games</Checkbox>
            <Checkbox name="bundle">Bundles</Checkbox>
          </Wrapper>
        </FilterWrapper>
        <FilterWrapper>
          <Wrapper>
            <InlineText color={theme.grey} fs={font.fs12} margin="0 25px 0 0;">
              SORT BY
            </InlineText>
          </Wrapper>
          <Wrapper>
            <Button fs={font.fs14} color={theme.grey} margin="0 25px 0 0;">
              Release Date
            </Button>
            <Button fs={font.fs14} color={theme.grey}>
              Ratings
            </Button>
          </Wrapper>
        </FilterWrapper>
      </FormWrapper>

      <GridWrapper>
        {games.map((item) => (
          <GameCard item={item} key={item.title} />
        ))}
      </GridWrapper>
    </SectionWrapper>
  );
};

export default GamesListSection;
