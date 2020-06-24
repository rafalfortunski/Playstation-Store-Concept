import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { connect } from "react-redux";

import GamesSlider from "../components/organisms/GamesSlider";
import GlobalStyle from "../theme/GlobalStyle";
import { theme, mainTheme, invertedTheme } from "../theme/mainTheme";
import MainGridTemplate from "../templates/MainGridTemplate";
import Header from "../components/organisms/Header";
import NewGamesSection from "../components/organisms/NewGamesSection";
import NewAddOnsSection from "../components/organisms/NewAddOnsSection";
import ComingSoonSection from "../components/organisms/ComingSoonSection";
import RankingSection from "../components/organisms/RankingSection";
import AboutSonySection from "../components/organisms/AboutSonySection";
import Footer from "../components/organisms/Footer";
import Title from "../components/atoms/Title/Title";

const ColorTitle = styled.span`
  color: ${theme.blue};
`;

const Home = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <MainGridTemplate>
          <Header>
            <Title level="h1">
              EXPLORE THE BEST OF
              <ColorTitle> PLAYSTATION STORE</ColorTitle>
            </Title>
          </Header>
          <GamesSlider />
          <NewGamesSection />
          <ThemeProvider theme={invertedTheme}>
            <ComingSoonSection />
            <RankingSection />
          </ThemeProvider>

          <NewAddOnsSection />
          <ThemeProvider theme={invertedTheme}>
            <AboutSonySection />
            <Footer />
          </ThemeProvider>
        </MainGridTemplate>
      </ThemeProvider>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    games: state.games
  }
}

export default connect(mapStateToProps)(Home);
