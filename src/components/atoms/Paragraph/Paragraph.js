import styled from "styled-components";

const Paragraph = styled.p`
  font-size: ${({ fs }) => (fs ? fs : "inherit")};
  font-weight: ${({ fw }) => fw};
  font-family: ${({ font }) => (font ? font : "inherit")};
  color: ${({ color }) => color};
  margin: ${({ margin }) => (margin ? margin : 0)};
  line-height: ${({ line }) => (line ? line : "inherit")};
`;

export default Paragraph;
