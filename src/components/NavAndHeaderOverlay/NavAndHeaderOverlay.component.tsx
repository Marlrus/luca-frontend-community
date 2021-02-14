import React from "react";
import Layout from "../../components/Layout/Layout.component";
import Navigation from "../../components/Navigation/Navigation.component";
import Header from "../../components/Header/Header.component";

import { Grid2Container } from "./NavAndHeaderOverlay.styles";

const NavAndHeaderOverlay: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <Layout>
      <Navigation />
      <Grid2Container>
        <Header />
        {children}
      </Grid2Container>
    </Layout>
  );
};

export default NavAndHeaderOverlay;
