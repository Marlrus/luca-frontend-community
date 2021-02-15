import React, { HTMLAttributes } from "react";

import { icons } from "../../IconsAndLogos";
import { CloseButtonContainer } from "./CloseButton.styles";

const CloseButton: React.FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <CloseButtonContainer {...props}>
      <img src={icons.CloseXIcon} alt="close button" />
    </CloseButtonContainer>
  );
};

export default CloseButton;
