import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import NavOption from "../NavOption/NavOption.component";
import { logos, icons } from "../../IconsAndLogos";
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
  NewQuestionPencil,
  ReferenceContainer,
} from "./Navigation.styles";

const Navigation: React.FC<RouteComponentProps> = ({ history }) => {
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
          <ReferenceContainer>
            {history.location.pathname !== "/community/question/new" && (
              <NewQuestionPencil
                onClick={() => history.push("/community/question/new")}
              >
                <img src={icons.PencilIcon} alt="new question pencil" />
              </NewQuestionPencil>
            )}
          </ReferenceContainer>
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

export default withRouter(Navigation);
