import React from "react";
import GlobalStyle from "../theme/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import MainGridTemplate from "../templates/MainGridTemplate";
import { invertedTheme, font } from "../theme/mainTheme";
import Header from "../components/organisms/Header";
import Title from "../components/atoms/Title/Title";
import { games } from "../data/GamesData";
import Cover from "../components/atoms/Cover/Cover";
import Footer from "../components/organisms/Footer";
import GamesListSection from "../components/organisms/GamesListSection";

const CoverWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5vw 0;

  ${Cover} {
    position: relative;
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
    filter: grayscale(100%);
  }

  ${Cover}:nth-child(2n) {
    top: 25px;
  }
  ${Cover}:hover {
    -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
    filter: grayscale(0%);
  }
`;

const ContentWrapper = styled.div`
  text-align: center;
`;

const Games = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={invertedTheme}>
        <MainGridTemplate>
          <Header whitelogo whitecart>
            <ContentWrapper>
              <CoverWrapper>
                {games.map((item) => (
                  <Cover width="7vw" height="20vw" coverURL={item.coverURL} />
                ))}
              </CoverWrapper>

              <Title level="h1" fw={font.thin}>
                GAMES
              </Title>
            </ContentWrapper>
          </Header>
          <GamesListSection />
          <Footer />
        </MainGridTemplate>
      </ThemeProvider>
    </>
  );
};

export default Games;
