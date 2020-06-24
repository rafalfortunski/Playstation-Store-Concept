import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme, font } from "../../theme/mainTheme";
import Cover from "../atoms/Cover/Cover";
import InlineText from "../atoms/InlineText/InlineText";
import Title from "../atoms/Title/Title";

const GameWrapper = styled.div`
  position: relative;
`;

const LineWrapper = styled.div``;

const Wrapper = styled.div`
  margin-top: 10px;
  justify-content: space-between;
  display: flex;
`;

const GameCard = ({ item, simpleCard }) => {
  const { id, coverURL, mediaType, playableOn, release, title, price } = item;

  return (
    <GameWrapper>
      <Link to={`/games/${id}`} alt={title}>
        {simpleCard ? (
          <>
            <Cover coverURL={coverURL} height="35vw;" />
            <Wrapper>
              <Title
                level="h3"
                color={theme.white}
                fs={font.fs22}
                fw={theme.thin}
              >
                {title}
              </Title>
              <LineWrapper>
                <InlineText color={theme.grey} fs={font.fs12} font={font.sfPro}>
                  {mediaType}
                </InlineText>
                <InlineText
                  color={theme.white}
                  fs={font.fs12}
                  font={font.sfPro}
                  fw={theme.bold}
                  margin="0 0 0 20px;"
                >
                  {playableOn}
                </InlineText>
              </LineWrapper>
            </Wrapper>
          </>
        ) : (
          <>
            <Cover coverURL={coverURL} height="22vw" />
            <Wrapper>
              <LineWrapper>
                <InlineText
                  margin="0 20px 0 0;"
                  s
                  color={theme.lightgrey}
                  fs={font.fs12}
                  font={font.sfPro}
                >
                  {mediaType}
                </InlineText>
                <InlineText fs={font.fs12} font={font.sfPro} fw={theme.bold}>
                  {playableOn}
                </InlineText>
              </LineWrapper>
              <LineWrapper>
                <InlineText
                  color={theme.lightgrey}
                  fs={font.fs12}
                  font={font.sfPro}
                >
                  Release: {release}
                </InlineText>
              </LineWrapper>
            </Wrapper>
            <Wrapper>
              <Title level="h3" fs={font.fs22} fw={theme.thin}>
                {title}
              </Title>
              <InlineText
                color={theme.grey}
                fs={font.fs22}
                fw={theme.thin}
                margin="0 0 0 10px;"
              >
                {`${price}$`}
              </InlineText>
            </Wrapper>
          </>
        )}
      </Link>
    </GameWrapper>
  );
};

export default GameCard;
