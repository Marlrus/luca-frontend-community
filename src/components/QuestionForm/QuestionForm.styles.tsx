import styled from "styled-components";
import { gray1 } from "../../StyleConstants";

export const FormContainer = styled.div`
  margin-top: 38px;
  grid-column: 1/9;
  padding: 0 16px;
`;

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 48px;
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  color: ${gray1};
`;

export const InputContainer = styled.div`
  margin-bottom: 32px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 32px;
`;
