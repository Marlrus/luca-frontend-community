import styled from "styled-components";
import { disabledIconGray, lucaBlue, medGrayBg } from "../../StyleConstants";

export const NavOptionContainer = styled.div`
  display: flex;
  justify-conent: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;
  width: fit-content;
  padding: 4px 16px;
  border-radius: 48px;

  &.active {
    background-color: ${medGrayBg};
  }

  &:hover {
    background-color: ${medGrayBg};
  }

  img {
    margin-right: 8px;
    height: 32px;
  }

  span {
    font-family: "Poppins";
    font-size: 16px;
    line-height: 24px;

    color: ${disabledIconGray};
  }
`;

export const IconOnlyContainer = styled.div`
  display: flex;
  justify-conent: center;
  align-items: center;
  cursor: pointer;
  transition: 0.2s;

  img {
    height: 32px;
  }
`;
