import React, { TextareaHTMLAttributes } from "react";

import {
  LabelContainer,
  StyledTextArea,
  ErrorMessage,
} from "./TextAreaInput.styles";

interface CustomProps {
  label?: string;
  error?: string;
  touched?: boolean;
}

type TextInputProps = CustomProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextAreaInput: React.FC<TextInputProps> = ({
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
      <StyledTextArea {...props} />
      {error && touched && <ErrorMessage>{error}</ErrorMessage>}
    </div>
  );
};

export default TextAreaInput;
