import React from "react";
import { SpinnerContainer, SpinnerOverlay } from "./Spinner.styles";

const Spinner: React.FC = () => (
  <SpinnerOverlay>
    <SpinnerContainer />
  </SpinnerOverlay>
);

export default Spinner;
