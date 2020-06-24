import React from "react";
import GlobalStyle from "../theme/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { mainTheme, font } from "../theme/mainTheme";
import MainGridTemplate from "../templates/MainGridTemplate";
import Header from "../components/organisms/Header";
import Title from "../components/atoms/Title/Title";

const Checkout = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={mainTheme}>
        <MainGridTemplate>
          <Header>
            <Title level="h1" fs={font.fs70} fw={font.thin}>
              Your bag
            </Title>
          </Header>
        </MainGridTemplate>
      </ThemeProvider>
    </>
  );
};

export default Checkout;
