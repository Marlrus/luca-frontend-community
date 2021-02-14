import React from "react";

import { PrimaryButton } from "./GameButton.style";

type ButtonTypes = "primary" | "secondary";

interface GameButtonProps {
  label: string;
  buttonType: ButtonTypes;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  fillDiv?: boolean;
}

const GameButton: React.FC<GameButtonProps> = ({
  label,
  buttonType,
  onClick = () => {},
  fillDiv = false,
}) => {
  const fillDivClassName = fillDiv ? "fill-div" : "";

  return (
    <PrimaryButton onClick={onClick} className={fillDivClassName}>
      {label}
    </PrimaryButton>
  );
};

export default GameButton;
