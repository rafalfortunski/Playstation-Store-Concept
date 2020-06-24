import React, { Component } from "react";
import { connect } from "react-redux";
import GlobalStyle from "../theme/GlobalStyle";
import styled, { ThemeProvider } from "styled-components";
import MainGridTemplate from "../templates/MainGridTemplate";
import { theme, invertedTheme, font } from "../theme/mainTheme";
import Header from "../components/organisms/Header";
import Title from "../components/atoms/Title/Title";
import Footer from "../components/organisms/Footer";
import Cover from "../components/atoms/Cover/Cover";
import Button from "../components/atoms/Button/Button";
import VideoBanner from "../components/atoms/VideoBanner/VideoBanner";
import InlineText from "../components/atoms/InlineText/InlineText";
import Paragraph from "../components/atoms/Paragraph/Paragraph";
import GameCard from "../components/molecules/GameCard";
import NewSlider from "../components/organisms/NewSlider";
import { addToCart } from "../actions/actions";

const HeadingWrapper = styled.section`
  display: grid;
  padding-right: 15px;
  grid-template-columns: 0.8fr 1fr;
  grid-column-gap: 10vw;
  align-items: center;
  position: relative;
  top: -20px;
  margin-bottom: 10vw;
`;

const DescriptionWrapper = styled.section`
  display: grid;
  padding-right: 15px;
  color: ${theme.white};
  grid-template-columns: 0.8fr 1fr;
  grid-column-gap: 10vw;
  align-items: start;
  top: -20px;
  background-color: ${theme.dark};
  padding: 0 10vw 10vw;
`;

const GameDetailsWrapper = styled.div`
  display: grid;
  grid-row-gap: 25px;
  font-size: ${font.fs14};
  font-family: ${font.sfPro};
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const InlineWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const CustomTitle = styled(Title)`
  text-transform: uppercase;
  letter-spacing: 4px;
`;

const AlsoBoughtWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  position: relative;
  overflow: hidden;
  padding: 1vw 0 1vw 0;
  background-color: ${theme.dark};
`;

const TitleWrapper = styled.div`
  padding: 0 0 0 10vw;
  width: 25vw;
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  padding: 3vw 0;
`;

class GameDetails extends Component {
  handleClick = (id) => {
    this.props.addToCart(id);
  };

  render() {
    const {
      params: { id },
    } = this.props.match;

    const game = this.props.games.filter(function (item) {
      return item.id === parseInt(id);
    });
    console.log(this.props);
    const {
      title,
      release,
      mediaType,
      playableOn,
      coverURL,
      price,
      youTube,
      ratings,
      developer,
      genre,
      languages,
      size,
      description,
    } = game[0];

    return (
      <>
        <GlobalStyle />
        <ThemeProvider theme={invertedTheme}>
          <MainGridTemplate>
            <Header whitelogo whitecart>
              <VideoBanner video={youTube} />
              <HeadingWrapper>
                <GameDetailsWrapper key={id}>
                  <InlineText color={theme.grey}>
                    {`${ratings} Ratings`}
                  </InlineText>
                  <InlineText color={theme.white}>{developer}</InlineText>
                  <CustomTitle level="h1" fs={font.fs40} fw={font.thin}>
                    {title}
                  </CustomTitle>
                  <GridWrapper>
                    <Wrapper>
                      <InlineText color={theme.grey}>RELEASE</InlineText>
                      <InlineText color={theme.white}>{release}</InlineText>
                    </Wrapper>
                    <Wrapper>
                      <InlineText color={theme.grey}>MEDIA TYPES</InlineText>
                      <InlineText color={theme.white}>{mediaType}</InlineText>
                    </Wrapper>
                    <Wrapper>
                      <InlineText color={theme.grey}>PLAYABLE ON</InlineText>
                      <InlineText color={theme.white}>{playableOn}</InlineText>
                    </Wrapper>
                  </GridWrapper>
                  <InlineText
                    color={theme.grey}
                    font={font.poppins}
                    fs={font.fs22}
                  >{`Price: ${price}$`}</InlineText>
                  <InlineWrapper>
                    <Button
                      main
                      bg={theme.white}
                      color={theme.dark}
                      margin="0 25px 0 0;"
                      onClick={() => {
                        this.handleClick(id);
                      }}
                    >
                      ADD TO CART
                    </Button>
                    <Button main transparent>
                      ADD TO WISHLIST
                    </Button>
                  </InlineWrapper>
                </GameDetailsWrapper>
                <Cover coverURL={coverURL} height="40vw" />
              </HeadingWrapper>
            </Header>
            <DescriptionWrapper>
              <Title level="h2">Description</Title>
              <GameDetailsWrapper>
                <GridWrapper>
                  <Wrapper>
                    <InlineText color={theme.grey}>GENRE</InlineText>
                    <InlineText color={theme.white}>{genre}</InlineText>
                  </Wrapper>
                  <Wrapper>
                    <InlineText color={theme.grey}>
                      AUDIO AND SUBTITLE
                    </InlineText>
                    <InlineText color={theme.white}>{languages}</InlineText>
                  </Wrapper>
                  <Wrapper>
                    <InlineText color={theme.grey}>FILE SIZE</InlineText>
                    <InlineText color={theme.white}>{size}</InlineText>
                  </Wrapper>
                </GridWrapper>
                <InlineWrapper>
                  <Button margin="0 25px 0 0;" color={theme.grey}>
                    About game
                  </Button>
                  <Button>Gameplay info</Button>
                </InlineWrapper>
                <Paragraph line={font.fs22}>{description}</Paragraph>
              </GameDetailsWrapper>
            </DescriptionWrapper>
            <AlsoBoughtWrapper>
              <TitleWrapper>
                <Title level="h2">People who bought this also bought</Title>
              </TitleWrapper>
              <SliderWrapper>
                <NewSlider>
                  {this.props.games.slice(0, 6).map((item) => (
                    <GameCard item={item} />
                  ))}
                </NewSlider>
              </SliderWrapper>
            </AlsoBoughtWrapper>
            <Footer />
          </MainGridTemplate>
        </ThemeProvider>
      </>
    );
  }
}

const mapStateToProps = ({ games }) => ({ games });

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GameDetails);
