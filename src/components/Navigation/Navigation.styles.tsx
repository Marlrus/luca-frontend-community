import styled from "styled-components";
import { size, white, black } from "../../StyleConstants";

export const SidebarDesktop = styled.div`
  grid-column: 1/2;
  grid-row: 1;
  height: 100vh;
  background-color: ${white};
  position: -webkit-sticky;
  position: sticky;
  top: 0px;

  @media screen and (max-width: ${size.desktop}) {
    display: block;
  }
`;

export const LogoContainer = styled.div`
  max-height: 80px;
  background-color: ${white};
  padding: 24px;

  img {
    cursor: pointer;
    height: 32px;
  }
`;

export const NavContainer = styled.div`
  padding: 40px 20px;
`;

export const NavOptionContainer = styled.div`
  margin-bottom: 24px;
`;

export const BottomNav = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: ${white};
  width: 100vw;
  height: 106px;
`;

export const NavIconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  max-width: 414px;
  background-color: ${white};
  margin-bottom: 40px;
`;

export const IconContainer = styled.div`
  margin: 0 20px;
`;

export const BlackBar = styled.div`
  margin: 0 auto;
  width: 173px;
  height: 5px;
  background-color: ${black};
  border-radius: 10px;
`;
