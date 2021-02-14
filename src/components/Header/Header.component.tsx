import React from "react";
import {
  HeaderDesktopContainer,
  SearchContainer,
  StatsContainer,
  UserContainer,
} from "./Header.styles";

const Header: React.FC = () => {
  return (
    <HeaderDesktopContainer>
      <SearchContainer> SEARCH </SearchContainer>
      <StatsContainer> STATS </StatsContainer>
      <UserContainer> USER </UserContainer>
    </HeaderDesktopContainer>
  );
};

export default Header;
