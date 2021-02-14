import React from "react";
import NavOption from "../NavOption/NavOption.component";
import { logos } from "../../IconsAndLogos";
import { NavDesktopOptions, NavMobileOptions } from "./Navigation.utils";
import { useMediaQuery } from "react-responsive";

import { minWidthQueries } from "../../StyleConstants";
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
  const isDesktop = useMediaQuery(minWidthQueries.desktop);
  return (
    <>
      {isDesktop && (
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
      {!isDesktop && (
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
