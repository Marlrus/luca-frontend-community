import styled from "styled-components";
import { gray1, white, size } from "../../StyleConstants";

export const CommentHeaderContainer = styled.div`
  background-color: ${white};
  padding: 40px 16px 0px 16px;

  @media screen and (min-width: ${size.desktop}) {
    background-color: unset;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 32px;
  color: ${gray1};
`;

export const NavContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
`;
