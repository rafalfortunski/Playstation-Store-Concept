import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { theme, font } from "../../../theme/mainTheme";

const tags = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
};

const TitleComponent = ({ level, fs, fw, color, children, ...props }) => {
  return React.createElement(tags[level] || tags.h1, props, children);
};

TitleComponent.propTypes = {
  level: PropTypes.oneOf(Object.values(tags)),
  fs: PropTypes.oneOf(Object.values(font)),
  fw: PropTypes.oneOf(Object.values(font)),
  color: PropTypes.oneOf(Object.values(theme)),
};

TitleComponent.defaultProps = {
  level: tags.h2,
  fs: font.fs40,
  fw: font.thin,
  color: theme.dark,
};

const Title = styled(TitleComponent)`
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => (props.color ? props.color : props.theme.basic)};
`;

export default Title;
