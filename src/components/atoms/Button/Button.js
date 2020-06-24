import styled, { css } from "styled-components";
import { theme } from "../../../theme/mainTheme";

const Button = styled.button`
  font-size: ${({ fs }) => (fs ? fs : "inherit")};
  font-weight: ${({ fw }) => (fw ? fw : "300")};
  font-family: ${({ font }) => (font ? font : "'SF Pro', sans-serif")};
  padding: 0;
  border: none;
  background: none;
  text-align: left;
  color: ${({ color }) => (color ? color : "inherit")};
  ${({ width }) => (width ? `width: ${width}` : null)};
  ${({ margin }) => (margin ? `margin: ${margin}` : null)};
  cursor: pointer;

  ${({ main }) =>
    main &&
    css`
      text-align: center;
      padding: 20px 40px;
      color: ${({ transparent, color }) =>
        transparent ? theme.grey : color ? color : "#fff"};
      background-color: ${({ transparent, bg }) =>
        transparent ? "transparent" : bg ? bg : theme.blue};
      border: ${({ transparent }) =>
        transparent ? `${theme.grey} 1px solid` : "none"};
      text-transform: uppercase;
    `}

  ${({ circle }) =>
    circle &&
    css`
      border-radius: 50%;
      border: 1px solid ${({ color }) => color};
      padding: 0;
      text-align: center;
      background: transparent;
      width: ${({ width }) => (width ? width : "80px")};
      height: ${({ height }) => (height ? height : "80px")};
    `}
`;

export default Button;
