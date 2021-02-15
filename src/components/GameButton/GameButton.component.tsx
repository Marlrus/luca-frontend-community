import React from "react";

import {
  PrimaryButton,
  PlainButton,
  SecondaryButton,
} from "./GameButton.style";

type ButtonTypes = "primary" | "secondary" | "plain";

interface GameButtonProps {
  label: string;
  buttonType?: ButtonTypes;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  fillDiv?: boolean;
  iconSrc?: string;
}

const GameButton: React.FC<GameButtonProps> = ({
  label,
  buttonType = "primary",
  onClick = () => {},
  fillDiv = false,
  iconSrc,
}) => {
  const fillDivClassName = fillDiv ? "fill-div" : "";

  if (buttonType === "plain") {
    return (
      <PlainButton onClick={onClick} className={fillDivClassName}>
        {label}
        {iconSrc && <img src={iconSrc} alt="label icon" />}
      </PlainButton>
    );
  }

  if (buttonType === "secondary") {
    return (
      <SecondaryButton onClick={onClick} className={fillDivClassName}>
        {label}
        {iconSrc && <img src={iconSrc} alt="label icon" />}
      </SecondaryButton>
    );
  }

  return (
    <PrimaryButton onClick={onClick} className={fillDivClassName}>
      {label}
      {iconSrc && <img src={iconSrc} alt="label icon" />}
    </PrimaryButton>
  );
};

export default GameButton;
