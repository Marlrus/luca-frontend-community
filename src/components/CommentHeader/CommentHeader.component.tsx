import React from "react";
import TabNavigation from "../TabNavigation/TabNavigation.component";

import {
  CommentHeaderContainer,
  Title,
  NavContainer,
} from "./CommentHeader.styles";

const CommentHeader: React.FC = () => {
  return (
    <CommentHeaderContainer>
      <Title>Comunidad Luca</Title>
      <NavContainer>
        <TabNavigation />
      </NavContainer>
    </CommentHeaderContainer>
  );
};

export default CommentHeader;
