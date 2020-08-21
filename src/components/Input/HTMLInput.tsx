import React from "react";
import styled from "styled-components";
import { HtmlInputProps } from "../../types/HtmlInput";

const sharedStyles = `
    height: 35px;
    padding: 5px;
    box-sizing: border-box;
    border: 1px solid var(--input-border);
    border-radius: 4px;
    color: var(--text);
`;

const Text = styled.input`
  width: 320px;
  margin-right: 15px;
  
  @media only screen and (max-width: 768px) {
    max-width: 505px;
  }
  
  @media only screen and (max-width: 480px) {
    width: 217px;
  }
  
  ${sharedStyles}
`;

const Select = styled.select`
  ${sharedStyles}
`;

const HTMLInput: React.FC<HtmlInputProps> = ({ type, onChange, value, id }) => {
    if (type === 'select'){
        return (
            <Select value={value} onChange={onChange} id={id} data-testid={id}>
                <option value="users">User</option>
                <option value="repositories">Repository</option>
            </Select>
        )
    }
    return <Text type="text" onChange={onChange} value={value} id={id} data-testid={id}/>;
};

export default HTMLInput;
