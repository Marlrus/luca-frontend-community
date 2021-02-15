import React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import TabNavigation from "../TabNavigation/TabNavigation.component";
import GameButton from "../GameButton/GameButton.component";
import { useMediaQuery } from "react-responsive";

import { minWidthQueries } from "../../StyleConstants";
import {
  CommentHeaderContainer,
  TopContainer,
  Title,
  NavContainer,
} from "./CommentHeader.styles";

const CommentHeader: React.FC<React.ReactNode & RouteComponentProps> = ({
  children,
  history,
}) => {
  const isDesktop = useMediaQuery(minWidthQueries.desktop);
  return (
    <CommentHeaderContainer>
      <TopContainer>
        <Title>Comunidad Luca</Title>
        {isDesktop && (
          <GameButton
            label="NUEVA PREGUNTA"
            buttonType="primary"
            onClick={() => history.push("/community/question/new")}
          />
        )}
      </TopContainer>
      <NavContainer>
        <TabNavigation
          options={[
            { label: "POPULARES", value: "populares" },
            { label: "NUEVOS", value: "nuevos" },
            { label: "SEGUIDOS", value: "seguidos" },
          ]}
          defaultValue="populares"
          handleChange={(v) => console.log(v)}
        />
      </NavContainer>
      {children}
    </CommentHeaderContainer>
  );
};

export default withRouter(CommentHeader);
