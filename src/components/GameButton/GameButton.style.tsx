import styled from "styled-components";
import {
  lucaBlue,
  lucaDarkBlue,
  medGrayBg,
  black,
  gray1,
  white,
  disabledIconGray,
  secondaryGray,
} from "../../StyleConstants";

export const PrimaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 10px 24px;
  color: ${white};
  background-color: ${lucaBlue};
  width: fit-content;
  font-family: "Poppins SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  color: ${white};
  border: 3px solid ${lucaDarkBlue};
  box-sizing: border-box;
  box-shadow: 0px 2px 0px ${lucaDarkBlue};
  border-radius: 10px;
  transition: 0.2s;
  height: 36px;

  img {
    margin-left: 8px;
    height: 16px;
    width: 16px;
  }

  &.active {
    color: ${lucaBlue};
  }

  &.fill-div {
    width: 100%;
  }

  &:hover {
    background-color: ${lucaDarkBlue};
    border-color: ${black};
  }

  &:active {
    background-color: ${gray1};
    color: ${white};
  }
`;

export const SecondaryButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 12px 12px;
  color: ${disabledIconGray};
  background-color: ${white};
  width: fit-content;
  font-family: "Poppins SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  border: 3px solid ${secondaryGray};
  box-sizing: border-box;
  box-shadow: 0px 2px 0px ${secondaryGray};
  border-radius: 10px;
  transition: 0.2s;
  height: 36px;

  img {
    margin-left: 8px;
    height: 16px;
    width: 16px;
  }

  &.active {
    background-color: ${medGrayBg};
  }

  &:hover {
    background-color: ${medGrayBg};
  }

  &.fill-div {
    width: 100%;
  }

  &:active {
    background-color: ${gray1};
    color: ${white};
  }
`;
