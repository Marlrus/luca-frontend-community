import styled from "styled-components";
import { size, white } from "../../StyleConstants";

export const SidebarDesktop = styled.div`
  grid-column: 1/2;
  grid-row: 1;
  height: 100vh;
  background-color: ${white};
  position: -webkit-sticky;
  position: sticky;
  top: 0px;

  @media screen and (max-width: ${size.tablet}) {
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
