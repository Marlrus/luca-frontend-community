import React from "react";
import NavOption from "../NavOption/NavOption.component";
import { logos } from "../../StyleConstants";
import { NavOptionData } from "./Navigation.utils";

import {
  SidebarDesktop,
  LogoContainer,
  NavContainer,
  NavOptionContainer,
} from "./Navigation.styles";

const Navigation: React.FC = () => (
  <SidebarDesktop>
    <LogoContainer>
      <img src={logos.LucaLogo} alt="Luca logo" />
    </LogoContainer>
    <NavContainer>
      {NavOptionData.map((props) => (
        <NavOptionContainer key={props.label}>
          <NavOption {...props} />
        </NavOptionContainer>
      ))}
    </NavContainer>
  </SidebarDesktop>
);

export default Navigation;
