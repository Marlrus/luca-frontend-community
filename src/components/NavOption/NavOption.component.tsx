import React from "react";

import { NavOptionContainer } from "./NavOption.styles";

interface NavOptionProps {
  label: string;
  icon: string;
  active?: boolean;
}

const NavOption: React.FC<NavOptionProps> = ({ icon, label, active }) => (
  <NavOptionContainer className={active ? "active" : ""}>
    <img src={icon} alt={`${label} icon`} />
    <span>{label}</span>
  </NavOptionContainer>
);

export default NavOption;
