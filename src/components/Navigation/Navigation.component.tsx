import React from "react";
import NavOption from "../NavOption/NavOption.component";
import { logos } from "../../StyleConstants";
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
  const isTablet = useMediaQuery(maxWidthQueries.tablet);
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
              <IconContainer>
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
