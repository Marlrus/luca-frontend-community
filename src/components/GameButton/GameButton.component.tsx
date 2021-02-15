import React, { ButtonHTMLAttributes } from "react";

import {
  PrimaryButton,
  PlainButton,
  SecondaryButton,
} from "./GameButton.style";

type ButtonTypes = "primary" | "secondary" | "plain";

interface GameButtonProps {
  label: string;
  buttonType?: ButtonTypes;
  fillDiv?: boolean;
  iconSrc?: string;
}

const GameButton: React.FC<
  GameButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ label, buttonType = "primary", fillDiv = false, iconSrc, ...props }) => {
  const fillDivClassName = fillDiv ? "fill-div" : "";

  if (buttonType === "plain") {
    return (
      <PlainButton {...props} className={fillDivClassName}>
        {label}
        {iconSrc && <img src={iconSrc} alt="label icon" />}
      </PlainButton>
    );
  }

  if (buttonType === "secondary") {
    return (
      <SecondaryButton {...props} className={fillDivClassName}>
        {label}
        {iconSrc && <img src={iconSrc} alt="label icon" />}
      </SecondaryButton>
    );
  }

  return (
    <PrimaryButton {...props} className={fillDivClassName}>
      {label}
      {iconSrc && <img src={iconSrc} alt="label icon" />}
    </PrimaryButton>
  );
};

export default GameButton;
