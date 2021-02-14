import React from "react";
import CommentHeader from "../CommentHeader/CommentHeader.component";
import ResponsiveContentGrid from "../ResponsiveContentGrid/ResponsiveContentGrid.component";
import {
  SectionContainer,
  ScrollContentContainer,
  HeaderContainer,
} from "./CommentSection.styles";

const CommentSection: React.FC = () => (
  <SectionContainer>
    <ScrollContentContainer>
      <ResponsiveContentGrid>
        <HeaderContainer>
          <CommentHeader />
        </HeaderContainer>
      </ResponsiveContentGrid>
    </ScrollContentContainer>
  </SectionContainer>
);

export default CommentSection;
