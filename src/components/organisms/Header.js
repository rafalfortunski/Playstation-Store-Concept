import React from "react";
import styled from "styled-components";
import NavBar from "../molecules/NavBar";

const GridWrapper = styled.div`
  padding: 0 10vw;
  background: ${(props) => props.theme.bg};
`;

const Header = (props) => {
  return (
    <GridWrapper>
      <NavBar whitelogo={props.whitelogo} whitecart={props.whitecart} />
      {props.children}
    </GridWrapper>
  );
};

export default Header;
