import React from "react";
import GameButton from "../GameButton/GameButton.component";
import { useMediaQuery } from "react-responsive";

import { icons, logos } from "../../IconsAndLogos";
import { minWidthQueries } from "../../StyleConstants";
import {
  HeaderDesktopContainer,
  SearchContainer,
  StatsContainer,
  UserContainer,
  StatAndNumber,
  Avatar,
  HeaderMobileContainer,
} from "./Header.styles";

const Header: React.FC = () => {
  const isDesktop = useMediaQuery(minWidthQueries.desktop);

  if (isDesktop) {
    return (
      <HeaderDesktopContainer>
        <SearchContainer>
          <div style={{ marginRight: "32px" }}>
            <GameButton
              label="Explorar"
              buttonType="secondary"
              iconSrc={icons.MoreArrowDownIcon}
            />
          </div>
          <img src={icons.SearchIcon} alt="search" />
        </SearchContainer>
        <StatsContainer>
          <StatAndNumber>
            <img src={icons.FireIcon} alt="flame" />0
          </StatAndNumber>
          <StatAndNumber>
            <img src={icons.ShieldIcon} alt="shield" />0
          </StatAndNumber>
          <StatAndNumber>
            <img src={icons.FlowerIcon} alt="flower" />0
          </StatAndNumber>
        </StatsContainer>
        <UserContainer>
          <img src={icons.NotificationBellIcon} alt="notification" />
          <Avatar />
        </UserContainer>
      </HeaderDesktopContainer>
    );
  }
  return (
    <HeaderMobileContainer>
      <img src={logos.LucaLogo} alt="luca logo" />
      <UserContainer>
        <img src={icons.NotificationBellIcon} alt="notification" />
        <Avatar />
      </UserContainer>
    </HeaderMobileContainer>
  );
};

export default Header;
