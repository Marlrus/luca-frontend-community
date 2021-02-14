import React from "react";
import NavOption from "../NavOption/NavOption.component";
import { logos } from "../../IconsAndLogos";
import { NavDesktopOptions, NavMobileOptions } from "./Navigation.utils";
import { useMediaQuery } from "react-responsive";

import { maxWidthQueries } from "../../StyleConstants";
import {
  SidebarDesktop,
  LogoContainer,
  NavContainer,
  NavOptionContainer,
  BottomNav,
  NavIconsContainer,
  IconContainer,
  BlackBar,
} from "./Navigation.styles";

const Navigation: React.FC = () => {
  const isTablet = useMediaQuery(maxWidthQueries.desktop);
  return (
    <>
      {!isTablet && (
        <SidebarDesktop>
          <LogoContainer>
            <img src={logos.LucaLogo} alt="Luca logo" />
          </LogoContainer>
          <NavContainer>
            {NavDesktopOptions.map((props) => (
              <NavOptionContainer key={props.label}>
                <NavOption {...props} />
              </NavOptionContainer>
            ))}
          </NavContainer>
        </SidebarDesktop>
      )}
      {isTablet && (
        <BottomNav>
          <NavIconsContainer>
            {NavMobileOptions.map((props) => (
              <IconContainer key={props.icon}>
                <NavOption {...props} />
              </IconContainer>
            ))}
          </NavIconsContainer>
          <BlackBar />
        </BottomNav>
      )}
    </>
  );
};

export default Navigation;
