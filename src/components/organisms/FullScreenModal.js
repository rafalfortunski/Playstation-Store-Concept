import React, { Component } from "react";
import styled from "styled-components";
import { theme, font } from "../../theme/mainTheme";

const ModalWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100vw;
  height: 200px;
  display: ${(props) => (props.isActive === true ? "flex" : "none")};
  align-content: center;
  color: #fff;
  z-index: 9999;
`;

const Input = styled.input`
  font-size: ${font.fs70};
  color: ${theme.white};
  background: transparent;
  width: 100%;
  opacity: 1;
  border: none;
  border-bottom: 2px solid red;
`;

class FullScreenModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: props.isActive,
    };
    this.handleChange = (event) => {
      this.setState({ active: event.target.isActive });
    };
    console.log(props.isActive);
  }

  render() {
    return (
      <ModalWrapper>
        <Input />
        <label>Search</label>
      </ModalWrapper>
    );
  }
}

export default FullScreenModal;
