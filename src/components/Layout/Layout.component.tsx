import React from "react";

import { LayoutGrid } from "./Layout.styles";

const Layout: React.FC<React.ReactNode> = ({ children }) => (
  <LayoutGrid>{children}</LayoutGrid>
);

export default Layout;
