import React, { useState } from "react";

import { NavContainer, NavTab } from "./TabNavigation.styles";

type handleChangeFn = (value: string) => any;

interface TabNavigationProps {
  options: {
    label: string;
    value: string;
  }[];
  defaultValue?: string;
  handleChange?: handleChangeFn;
}

const TabNavigation: React.FC<TabNavigationProps> = ({
  options,
  defaultValue = "",
  handleChange = () => {},
}) => {
  const [active, setActive] = useState<string>(defaultValue);

  const determineActive = (value: string) => (value === active ? "active" : "");

  return (
    <NavContainer>
      {options.map(({ label, value }) => (
        <NavTab
          key={value}
          className={determineActive(value)}
          onClick={() => {
            setActive(value);
            handleChange(value);
          }}
        >
          {label}
        </NavTab>
      ))}
    </NavContainer>
  );
};

export default TabNavigation;
