import React, { useContext } from "react";
import Context from "../Context";
import styled from "styled-components";

const Container = styled.label`
  position: relative;
  display: inline-block;
  width: 55px;
  height: 30px;
  margin-right: 15px;
`;

const Slider = styled.span`
position: absolute;
top:0;
display: block;
cursor:pointer;
width:100%;
height:100%
background-color: #18274D;
border-radius: 34px;
-webkit-transition: 0.4s;
transition: 0.4s;

&::before{
    position:absolute;
    content:"";
    height:22px;
    width:22px;
    margin: 4px;
    background-color:#765DE8;
    border-radius: 50%;
    -webkit-transition: 0.4s;
    transition: 0.4s;
}
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  margin: 0;

  &:checked + ${Slider} {
    background-color: #fff;
  }

  &:checked + ${Slider}::before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  &:focus + ${Slider} {
    box-shadow: 0 0 1px #2196f3;
  }
`;

const Switch = () => {
  const { dispatch } = useContext(Context);

  const handleOnClick = () => {
    //Dispatch action
    dispatch({ type: "TOGGLE_DARK_MODE" });
  };

  return (
    <Container>
      <Input type="checkbox" onClick={handleOnClick} />
      <Slider />
    </Container>
  );
};

export default Switch;
