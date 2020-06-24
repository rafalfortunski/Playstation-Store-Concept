import React from "react";
import GlobalStyle from "../theme/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import { font, invertedTheme } from "../theme/mainTheme";
import MainGridTemplate from "../templates/MainGridTemplate";
import Header from "../components/organisms/Header";
import Title from "../components/atoms/Title/Title";
import Footer from "../components/organisms/Footer";

const CustomTitle = styled(Title)`
  padding: 10vw 3vw;
`;

const NotReady = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={invertedTheme}>
        <MainGridTemplate>
          <Header whitelogo>
            <CustomTitle level="h1" fs={font.fs70} fw={font.thin}>
              So sorry... This page is not ready yet.
              <span role="img" aria-label="Crying">
                😭
              </span>
            </CustomTitle>
          </Header>
          <Footer />
        </MainGridTemplate>
      </ThemeProvider>
    </>
  );
};

export default NotReady;
