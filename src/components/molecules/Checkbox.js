import React, { Component } from "react";
import styled, { css } from "styled-components";
import InlineText from "../atoms/InlineText/InlineText";
import { theme, font } from "../../theme/mainTheme";

const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

const Icon = styled.svg`
  fill: none;
  stroke: ${theme.dark};
  stroke-width: 3px;
`;

const checkedStyles = css``;

const uncheckedStyles = css``;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${(props) => (props.checked ? theme.white : "transparent")};
  border-radius: 3px;
  transition: all 150ms;
  cursor: pointer;
  border: 1px solid ${(props) => (props.checked ? theme.white : theme.grey)};
  ${Icon} {
    top: -3px;
    position: relative;
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
  ${(props) => (props.checked ? checkedStyles : uncheckedStyles)};
`;

const CheckboxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
  width: 16px;
  height: 16px;
  margin-right: 10px;
`;

const CheckboxComponent = ({ className, checked, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} {...props} />
    <StyledCheckbox checked={checked}>
      <Icon viewBox="0 0 24 24">
        <polyline points="20 6 9 17 4 12" />
      </Icon>
    </StyledCheckbox>
  </CheckboxContainer>
);

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }
  handleCheckboxChange = (event) =>
    this.setState({ checked: event.target.checked });

  render() {
    return (
      <div>
        <label>
          <CheckboxComponent
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
            name={this.props.name}
            id={this.props.name}
            key={this.props.name}
          />
          <InlineText fs={font.fs14} font={font.sfPro} margin="0 20px 0 0;">
            {this.props.children}
          </InlineText>
        </label>
      </div>
    );
  }
}
export default Checkbox;
