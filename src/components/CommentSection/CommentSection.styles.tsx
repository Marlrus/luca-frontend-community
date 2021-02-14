import styled from "styled-components";
import {
  medGrayBg,
  lucaBlue,
  gray1,
  white,
  size,
  gray4,
} from "../../StyleConstants";

export const SectionContainer = styled.div`
  background-color: ${white};
  width: 100%;

  @media screen and (min-width: ${size.desktop}) {
    background-color: ${medGrayBg};
  }
`;

export const ScrollContentContainer = styled.div`
  height: calc(100vh - 80px);
  overflow: auto;
`;

export const HeaderContainer = styled.div`
  grid-column: 1 / 9;
`;

export const NoResultsLeft = styled.h2`
  font-family: "Poppins SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  color: ${gray1};
  margin: 32px 0;
`;

export const QuestionSeparator = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${gray4};
`;
