import React, { useState } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import NavBarItem from "../atoms/NavBarItem/NavBarItem";
import whiteLogo from "../../logo_white.svg";
import logo from "../../logo.svg";
import InlineText from "../atoms/InlineText/InlineText";
import { theme, font } from "../../theme/mainTheme";
import Button from "../atoms/Button/Button";

const NavWrapper = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 2vw 0;
`;

const NavItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.img`
  margin-right: 30px;
`;

const MENU_ITEMS = {
  games: "Games",
  playstation: "Playstation+",
  deals: "Deals",
  addOns: "Add-ons",
  justForYou: "Just for You",
};

const ModalWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: ${(props) => (props.isActive === true ? "flex" : "none")};
  flex-direction: row;
  background-color: black;
  align-items: center;
  align-content: center;
  opacity: 0.8;
  z-index: 1;
  margin: auto;
`;

const Input = styled.input`
  position: relative;
  font-size: ${font.fs70};
  color: ${theme.white};
  background: transparent;
  height: 80px;
  margin: auto;
  overflow: hidden;
  opacity: 1;
  border: none;
  border-bottom: 4px solid white;
`;

const CloseButton = styled.a`
  position: absolute;
  right: 32px;
  top: 32px;
  width: 32px;
  height: 32px;
  opacity: 1;
  cursor: pointer;
  :hover {
    opacity: 1;
  }
  :before,
  :after {
    position: absolute;
    left: 15px;
    content: " ";
    height: 50px;
    width: 4px;
    background-color: #fff;
  }
  :before {
    transform: rotate(45deg);
  }
  :after {
    transform: rotate(-45deg);
  }
`;

const CartButtonWrapper = styled.div`
  background-color: ${theme.blue};
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  text-align: center;
  align-items: center;
  align-content: center;
  margin-left: 20px;
`;

const CartButton = styled(Button)`
  color: ${theme.white};
  margin: auto;
  line-height: 15px;
`;

const NavBar = ({ whitelogo, whitecart, addedItems, ...props }) => {
  const { games, playstation, deals, addOns, justForYou } = MENU_ITEMS;

  const [isActive, handleModal] = useState(false);

  const inBasket = addedItems.length;

  return (
    <>
      <NavWrapper>
        <NavItemsWrapper as={NavLink} to="/">
          <Logo src={whitelogo ? whiteLogo : logo} alt="logo" />
          <InlineText fs={font.fs22}>PlayStation Store</InlineText>
        </NavItemsWrapper>
        <NavItemsWrapper>
          <NavBarItem as={NavLink} to="/games">
            {games}
          </NavBarItem>
          <NavBarItem as={NavLink} to="/playstation">
            {playstation}
          </NavBarItem>
          <NavBarItem as={NavLink} to="/deals">
            {deals}
          </NavBarItem>
          <NavBarItem as={NavLink} to="/add-ons">
            {addOns}
          </NavBarItem>
          <NavBarItem as={NavLink} to="/just-for-you">
            {justForYou}
          </NavBarItem>
        </NavItemsWrapper>
        <NavItemsWrapper>
          <NavBarItem onClick={() => handleModal(!isActive)}>Search</NavBarItem>
          <NavBarItem as={Link} to="/login">
            Sign up / Log in
          </NavBarItem>
          <CartButtonWrapper>
            <CartButton
              as={NavLink}
              to="/cart"
              fs={font.fs16}
              font={font.poppins}
            >
              {inBasket}
            </CartButton>
          </CartButtonWrapper>
        </NavItemsWrapper>
      </NavWrapper>
      <ModalWrapper isActive={isActive}>
        <CloseButton onClick={() => handleModal(!isActive)} />
        <Input />
      </ModalWrapper>
    </>
  );
};

const mapStateToProps = ({ addedItems }) => ({ addedItems });

export default connect(mapStateToProps)(NavBar);
