import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import logo from "../../logo_white.svg";
import InlineText from "../atoms/InlineText/InlineText";
import Button from "../atoms/Button/Button";
import Title from "../atoms/Title/Title";
import { theme, font } from "../../theme/mainTheme";

const Icon = styled(FontAwesomeIcon)`
  color: ${theme.grey};
  padding: 2px;
`;

const FooterWrapper = styled.footer`
  display: grid;
  grid-template-columns: 1fr 0.8fr 0.6fr 0.6fr 0.6fr;
  background-color: ${theme.dark};
  padding: 5vw 10vw;
`;

const SocialIconsWrapper = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: row;
  font-size: 11px;
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: space-between;
  color: ${theme.lightgrey};
  font-size: ${font.fs14};
`;

const Logo = styled.img`
  margin-right: 30px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Wrapper>
        <LogoWrapper>
          <Logo src={logo} alt="logo" />
          <InlineText fs={font.fs22} color={theme.white}>
            PlayStation Store
          </InlineText>
        </LogoWrapper>

        <InlineText color={theme.grey} fs={font.fs14} margin="auto 0 0 0;">
          © SONY 2020. ALL RIGHTS RESERVED
        </InlineText>
      </Wrapper>
      <Wrapper>
        <Button fs={font.fs14} color={theme.lightgrey}>
          Sign up / Log in
        </Button>
        <SocialIconsWrapper>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/playstation/"
          >
            <Button
              circle
              color={theme.grey}
              width="30px"
              height="30px"
              margin="0 10px 0 0"
            >
              <Icon icon={faFacebookF} size="2x" />
            </Button>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/playstation"
          >
            <Button
              circle
              color={theme.grey}
              width="30px"
              height="30px"
              margin="0 10px 0 0"
            >
              <Icon icon={faTwitter} size="2x" />
            </Button>
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/user/PlayStation"
          >
            <Button
              circle
              color={theme.grey}
              width="30px"
              height="30px"
              margin="0 10px 0 0"
            >
              <Icon icon={faYoutube} size="2x" />
            </Button>
          </a>
        </SocialIconsWrapper>
      </Wrapper>
      <Wrapper>
        <Title level="h4" fw={theme.thin} fs={font.fs16} color={theme.white}>
          SERVICES
        </Title>
        <Button margin="7px 0">Playstation Video</Button>
        <Button margin="7px 0">Playstation Music</Button>
        <Button margin="7px 0">Playstation Plus</Button>
      </Wrapper>
      <Wrapper>
        <Title level="h4" fw={font.thin} fs={font.fs16} color={theme.white}>
          LEGAL
        </Title>
        <Button margin="7px 0">Terms of service</Button>
        <Button margin="7px 0">Health Warning</Button>
        <Button margin="7px 0">Privacy Settings</Button>
        <Button margin="7px 0">Contact us</Button>
      </Wrapper>
      <Wrapper>
        <Title level="h4" fw={theme.thin} fs={font.fs16} color={theme.white}>
          PLAYSTATION NETWORK
        </Title>
        <Button margin="7px 0">About us</Button>
        <Button margin="7px 0">Blog</Button>
        <Button margin="7px 0">Careers</Button>
        <Button margin="7px 0">Support</Button>
      </Wrapper>
    </FooterWrapper>
  );
};

export default Footer;
