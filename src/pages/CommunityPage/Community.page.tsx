import React from "react";
import Layout from "../../components/Layout/Layout.component";
import CommentSection from "../../components/CommentSection/CommentSection";
import Navigation from "../../components/Navigation/Navigation.component";
import Header from "../../components/Header/Header.component";

import { Grid2Container } from "./Community.styles";

const CommunityPage: React.FC = () => {
  return (
    <Layout>
      <Navigation />
      <Grid2Container>
        <Header />
        <CommentSection />
      </Grid2Container>
    </Layout>
  );
};

export default CommunityPage;
