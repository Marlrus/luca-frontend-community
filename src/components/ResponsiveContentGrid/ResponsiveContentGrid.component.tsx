import React from "react";
import { ResponsiveGridContainer } from "./ResponsiveContentGrid.styles";

const ResponsiveContentGrid: React.FC<React.ReactNode> = ({ children }) => {
  return <ResponsiveGridContainer>{children}</ResponsiveGridContainer>;
};

export default ResponsiveContentGrid;
