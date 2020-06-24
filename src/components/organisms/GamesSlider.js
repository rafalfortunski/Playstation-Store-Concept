import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Subtitle from "../atoms/Subtitle/Subtitle";
import Button from "../atoms/Button/Button";
import Cover from "../atoms/Cover/Cover";
import NewSlider from "../organisms/NewSlider";
import { addToCart } from "../../actions/actions";

// const GamesSliderWrapper = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-content: center;
// `;

const GridWrapper = styled.div`
  padding: 3vw 0 3vw 10vw;
  overflow: hidden;
`;
const GameDetailsWrapper = styled.div`
  display: grid !important;
  grid-template-columns: 0.8fr 1fr;
  grid-column-gap: 10vw;
`;
const Wrapper = styled.div`
  align-self: center;
  float: left;
`;

const GamesSlider = ({ games, ...props }) => {
  const handleClick = (id) => {
    props.addToCart(id);
  };
  return (
    <GridWrapper>
      <NewSlider slidesToShow="1">
        {games.map(
          ({ title, release, mediaType, playableOn, coverURL, id }) => (
            <GameDetailsWrapper key={title}>
              <Wrapper>
                <Subtitle>{title}</Subtitle>
                <p>RELEASE {release}</p>
                <p>MEDIA TYPES {mediaType}</p>
                <p>PLAYABLE ON {playableOn}</p>
                <Button
                  main
                  onClick={() => {
                    handleClick(id);
                  }}
                >
                  Add to cart
                </Button>
                <Button main transparent>
                  Add to wishlist
                </Button>
              </Wrapper>
              <Wrapper>
                <Cover coverURL={coverURL} width="100%" height="100vh" />
              </Wrapper>
            </GameDetailsWrapper>
          )
        )}
      </NewSlider>
    </GridWrapper>
  );
};

const mapStateToProps = ({ games }) => ({ games });

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => {
      dispatch(addToCart(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GamesSlider);
