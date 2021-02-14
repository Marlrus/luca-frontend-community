import styled from "styled-components";
import { medGrayBg } from "../../StyleConstants";

export const HeaderDesktopContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 80px;
  background-color: ${medGrayBg};
  width: calc(100% - 96px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  padding: 0 48px;
`;

export const SearchContainer = styled.div`
  grid-column: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const StatsContainer = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserContainer = styled.div`
  grid-column: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
