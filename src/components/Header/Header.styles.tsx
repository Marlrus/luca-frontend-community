import styled from "styled-components";
import {
  size,
  medGrayBg,
  disabledIconGrayLight,
  white,
} from "../../StyleConstants";

export const HeaderDesktopContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 80px;
  background-color: ${medGrayBg};
  width: calc(100% - 96px);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  padding: 0 48px;
`;

export const SearchContainer = styled.div`
  grid-column: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  img {
    cursor: pointer;
  }
`;

export const StatsContainer = styled.div`
  grid-column: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins SemiBold";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;

  color: ${disabledIconGrayLight};
`;

export const StatAndNumber = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 16px;

  img {
    height: 32px;
    width: 32px;
  }
`;

export const UserContainer = styled.div`
  grid-column: 3;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  img {
    cursor: pointer;
    margin-right: 16px;
    width: 32px;
    height: 32px;
  }

  @media screen and (min-width: ${size.desktop}) {
    img {
      margin-right: 32px;
      height: 28px;
      width: 28px;
    }
  }
`;

export const Avatar = styled.div`
  border-radius: 50%;
  background-color: ${disabledIconGrayLight};
  cursor: pointer;
  width: 40px;
  height: 40px;

  @media screen and (min-width: ${size.desktop}) {
    width: 32px;
    height: 32px;
    background-color: ${white};
  }
`;

export const HeaderMobileContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  height: 64px;
  background-color: ${white};
  width: calc(100% - 32px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  max-width: 704px;
  margin: 0 auto;

  @media screen and (max-width: ${size.tablet}) {
    border-bottom: 1px solid ${disabledIconGrayLight};
  }

  img {
    height: 32px;
  }
`;
