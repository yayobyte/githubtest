import React from "react";
import styled from "styled-components";
import { HtmlInputProps } from "../../types/HtmlInput";
import HTMLInput from "./HTMLInput";

const InputContainer = styled.div`

`;

const Input : React.FC<HtmlInputProps> = ({ type, value, onChange, id }) => (
    <InputContainer>
        <label htmlFor="search" />
        <HTMLInput type={type} value={value} onChange={onChange} id={id} />
    </InputContainer>
);

export default Input;
