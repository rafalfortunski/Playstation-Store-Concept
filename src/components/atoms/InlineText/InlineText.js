import styled from "styled-components";

const InlineText = styled.span`
  font-size: ${({ fs }) => (fs ? fs : "inherit")};
  font-weight: ${({ fw }) => fw};
  font-family: ${({ font }) => (font ? font : "inherit")};
  color: ${(props) => (props.color ? props.color : props.theme.basic)};
  margin: ${({ margin }) => (margin ? margin : 0)};
`;

export default InlineText;
