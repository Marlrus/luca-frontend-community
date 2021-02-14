import React from "react";

import { NavOptionContainer, IconOnlyContainer } from "./NavOption.styles";

interface NavOptionProps {
  label?: string;
  icon: string;
  active?: boolean;
  iconOnly?: boolean;
}

const NavOption: React.FC<NavOptionProps> = ({
  icon,
  label,
  active,
  iconOnly,
}) => (
  <>
    {!iconOnly && (
      <NavOptionContainer className={active ? "active" : ""}>
        <img src={icon} alt={`${label} icon`} />
        <span>{label}</span>
      </NavOptionContainer>
    )}
    {iconOnly && (
      <IconOnlyContainer>
        <img src={icon} alt={`${label} icon`} />
      </IconOnlyContainer>
    )}
  </>
);

export default NavOption;
