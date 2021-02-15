import styled from "styled-components";
import {
  white,
  placeholderGray,
  gray5,
  disabledIconGrayLight,
} from "../../StyleConstants";

export const LabelContainer = styled.div`
  margin-bottom: 8px;

  label {
    font-family: "Poppins SemiBold";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 16px;
    color: ${gray5};
  }
`;

export const StyledTextInput = styled.input`
  border: 3px solid red;
  width: calc(100% - 32px);
  background: ${white};
  border: 2px solid ${disabledIconGrayLight};
  border-radius: 12px;
  padding: 16px;
  color: ${gray5};
  font-family: "Poppins";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 18px;

  &::placeholder {
    font-family: "Poppins";
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    color: ${placeholderGray};
  }
`;
