import React, { TextareaHTMLAttributes } from "react";

import { LabelContainer, StyledTextArea } from "./TextAreaInput.styles";

interface CustomProps {
  label?: string;
}

type TextInputProps = CustomProps & TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextAreaInput: React.FC<TextInputProps> = ({ label, ...props }) => {
  return (
    <div>
      {label && (
        <LabelContainer>
          <label>{label}</label>
        </LabelContainer>
      )}
      <StyledTextArea {...props} />
    </div>
  );
};

export default TextAreaInput;
