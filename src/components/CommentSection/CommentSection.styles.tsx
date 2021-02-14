import styled from "styled-components";
import { medGrayBg, white, size } from "../../StyleConstants";

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
