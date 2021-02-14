import styled from "styled-components";
import {
  lucaBlue,
  disabledIconGray,
  medBlueBg,
  gray1,
  white,
  size,
  medGrayBg,
} from "../../StyleConstants";

export const NavContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${white};

  @media screen and (min-width: ${size.desktop}) {
    background-color: ${medGrayBg};
  }
`;

export const NavTab = styled.div`
  cursor: pointer;
  padding: 8px 16px;
  color: ${disabledIconGray};
  width: fit-content;
  font-family: "Inter SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.02em;
  transition: 0.2s;

  &.active {
    color: ${lucaBlue};
    border-bottom: 2px solid ${lucaBlue};
    padding-bottom: 6px;
  }

  &:hover {
    background-color: ${medBlueBg};
  }

  &:active {
    background-color: ${gray1};
    color: ${white};
  }
`;
