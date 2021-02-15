import styled from "styled-components";
import { size, medGrayBg, white } from "../../StyleConstants";

export const QuestionFormContainer = styled.div`
  background-color: ${white};

  @media screen and (min-width: ${size.desktop}) {
    background-color: ${medGrayBg};
  }
`;

export const ScrollContentContainer = styled.div`
  height: calc(100vh - 171px);
  overflow: auto;
`;
