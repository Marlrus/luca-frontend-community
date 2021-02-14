import styled from "styled-components";
import { medGrayBg } from "../../StyleConstants";

export const SectionContainer = styled.div`
  background-color: ${medGrayBg};
  width: 100%;
`;

export const ScrollContentContainer = styled.div`
  height: calc(100vh - 80px);
  overflow: auto;
`;

export const HeaderContainer = styled.div`
  grid-column: 1 / 9;
`;
