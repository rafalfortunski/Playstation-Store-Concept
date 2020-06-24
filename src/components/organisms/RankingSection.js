import React, { Component } from "react";
import styled from "styled-components";
import { ranking } from "../../data/GamesRankingData";
import { theme, font } from "../../theme/mainTheme";
import Button from "../atoms/Button/Button";
import InlineText from "../atoms/InlineText/InlineText";

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1fr;
  grid-column-gap: 15vw;
  padding: 5vw 10vw;
  background: ${theme.dark};
  justify-items: start;
`;

const ButtonsAreaWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1vw 50px 100%;
  height: 45px;
  grid-column-gap: 35px;
  align-items: center;
`;

const Line = styled.hr`
  width: 100%;
  height: 1px;
  border: 0;
  background-color: #fff;
`;

class RankingSection extends Component {
  state = {
    active: "addons",
  };

  handleChange = (event) => {
    this.setState({ active: event.target.id });
  };

  render() {
    const type = this.state.active;

    return (
      <GridWrapper>
        <ButtonsAreaWrapper>
          <Button
            color={this.state.active === "games" ? theme.white : theme.grey}
            font={font.poppins}
            onClick={this.handleChange}
            id="games"
            fs={font.fs40}
            margin="0 0 25px 0"
          >
            Top Games
          </Button>
          <Button
            color={this.state.active === "digital" ? theme.white : theme.grey}
            font={font.poppins}
            onClick={this.handleChange}
            id="digital"
            fs={font.fs40}
            margin="0 0 25px 0"
          >
            Top Digital-Only Games
          </Button>
          <Button
            color={this.state.active === "addons" ? theme.white : theme.grey}
            font={font.poppins}
            onClick={this.handleChange}
            id="addons"
            fs={font.fs40}
          >
            Top Add-ons
          </Button>
        </ButtonsAreaWrapper>
        <ContentWrapper id="ranking">
          <Button circle color={theme.white}>
            See all
          </Button>
          {ranking[type].map((item) => (
            <Wrapper>
              <InlineText color={theme.white} fs={font.fs22}>
                {item.place}
              </InlineText>
              <Line />
              <InlineText color={theme.white} fs={font.fs22}>
                {item.title}
              </InlineText>
            </Wrapper>
          ))}
        </ContentWrapper>
      </GridWrapper>
    );
  }
}
export default RankingSection;
