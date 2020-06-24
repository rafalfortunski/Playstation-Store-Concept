import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import GlobalStyle from "../theme/GlobalStyle";
import { theme, mainTheme, font } from "../theme/mainTheme";
import MainGridTemplate from "../templates/MainGridTemplate";
import Cover from "../components/atoms/Cover/Cover";
import Header from "../components/organisms/Header";
import Title from "../components/atoms/Title/Title";
import Button from "../components/atoms/Button/Button";
import Footer from "../components/organisms/Footer";
import InlineText from "../components/atoms/InlineText/InlineText";
import { removeFromCart } from "../actions/actions";

const BasketWrapper = styled.section`
  padding: 5vw 10vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
  justify-content: space-between;
  grid-row-gap: 25px;
`;

const GridLine = styled.div`
  height: 1px;
  background-color: ${theme.lightgrey};
  grid-column: 1 / 4;
`;

const GridChild = styled.div`
  ${(props) => (props.justify ? `justify-self: ${props.justify}` : null)};
  ${(props) => (props.position ? `grid-column: ${props.position}` : null)};
`;

const EmptyBasket = styled(InlineText)`
  grid-column: 1 / 4;
  text-align: center;
  margin: 25px 0;
`;

const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: start;
`;

const Wrapper = styled.div`
  margin-left: 25px;
  display: grid;
  grid-template-rows: 0.5fr 1fr 0.2fr;
`;

const ShoppingCart = ({ addedItems, total, ...props }) => {
  const handleClick = (id) => {
    props.removeFromCart(id);
  };
  console.log(total);
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
          <BasketWrapper>
            <GridChild justify="start">
              <InlineText>item</InlineText>
            </GridChild>
            <GridChild justify="center">
              <InlineText>price</InlineText>
            </GridChild>
            <GridChild justify="end">
              <InlineText>subtotal</InlineText>
            </GridChild>
            <GridLine />
            {addedItems.length === 0 ? (
              <EmptyBasket>Your basket is currently empty. </EmptyBasket>
            ) : (
              addedItems.map((item) => {
                const {
                  title,
                  price,
                  coverURL,
                  mediaType,
                  playableOn,
                  id,
                } = item;
                return (
                  <>
                    <GridChild justify="start">
                      <FlexWrapper>
                        <Cover
                          coverURL={coverURL}
                          width="170px"
                          height="200px"
                        />
                        <Wrapper>
                          <Title level="h2" fs={font.fs22}>
                            {title}
                          </Title>
                          <RowWrapper>
                            <InlineText margin="0 25px 0 0;">
                              {mediaType}
                            </InlineText>
                            <InlineText fw={font.bold}>{playableOn}</InlineText>
                          </RowWrapper>

                          <Button onClick={() => handleClick(id)}>
                            Remove
                          </Button>
                        </Wrapper>
                      </FlexWrapper>
                    </GridChild>
                    <GridChild justify="center">
                      <InlineText>{`${price}$`}</InlineText>
                    </GridChild>
                    <GridChild justify="end">
                      <InlineText>{`${price}$`}</InlineText>
                    </GridChild>
                  </>
                );
              })
            )}
            <GridLine />
            <Button as={Link} to="/checkout" main width="50%">
              CHECKOUT
            </Button>
            <GridChild position="3 / 4" justify="end">
              <InlineText>{`Items total: ${total}$`}</InlineText>
            </GridChild>
          </BasketWrapper>

          <Footer />
        </MainGridTemplate>
      </ThemeProvider>
    </>
  );
};

const mapStateToProps = ({ addedItems, total }) => ({ addedItems, total });

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => {
      dispatch(removeFromCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
