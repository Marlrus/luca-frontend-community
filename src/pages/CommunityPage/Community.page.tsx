import React from "react";
import Layout from "../../components/Layout/Layout.component";
import CommentSection from "../../components/CommentSection/CommentSection";
import Navigation from "../../components/Navigation/Navigation.component";
import { useMediaQuery } from "react-responsive";
import { sizeQueries } from "../../StyleConstants";

const CommunityPage: React.FC = () => {
  const isTablet = useMediaQuery(sizeQueries.tablet);

  return (
    <Layout>
      <Navigation />
      <CommentSection />
    </Layout>
  );
};

export default CommunityPage;
