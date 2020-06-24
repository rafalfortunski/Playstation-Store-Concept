import styled from "styled-components";

const Cover = styled.div`
  background: url(${({ coverURL }) => coverURL});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "400px")};
`;

export default Cover;
