import React, { InputHTMLAttributes } from "react";

import {
  LabelContainer,
  StyledTextInput,
  ErrorMessage,
} from "./TextInput.styles";

interface CustomProps {
  label?: string;
  error?: string;
  touched?: boolean;
}

type TextInputProps = CustomProps & InputHTMLAttributes<HTMLInputElement>;

const TextInput: React.FC<TextInputProps> = ({
  label,
  error,
  touched,
  ...props
}) => {
  return (
    <div>
      {label && (
        <LabelContainer>
          <label>{label}</label>
        </LabelContainer>
      )}
      <StyledTextInput {...props} />
      {error && touched && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default TextInput;
