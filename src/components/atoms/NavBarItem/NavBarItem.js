import styled from "styled-components";

const NavBarItem = styled.a`
  text-decoration: none;
  margin-left: 20px;
  color: ${(props) => props.theme.basic};
  cursor: pointer;
`;

export default NavBarItem;
