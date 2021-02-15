import React, { InputHTMLAttributes } from "react";

import { LabelContainer, StyledTextInput } from "./TextInput.styles";

interface CustomProps {
  label?: string;
}

type TextInputProps = CustomProps & InputHTMLAttributes<HTMLInputElement>;

const TextInput: React.FC<TextInputProps> = ({ label, ...props }) => {
  return (
    <div>
      {label && (
        <LabelContainer>
          <label>{label}</label>
        </LabelContainer>
      )}
      <StyledTextInput {...props} />
    </div>
  );
};

export default TextInput;
