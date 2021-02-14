import React from "react";
import CommentSection from "../../components/CommentSection/CommentSection";
import NavAndHeaderOverlay from "../../components/NavAndHeaderOverlay/NavAndHeaderOverlay.component";

const CommunityPage: React.FC = () => {
  return (
    <NavAndHeaderOverlay>
      <CommentSection />
    </NavAndHeaderOverlay>
  );
};

export default CommunityPage;
