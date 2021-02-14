import styled from "styled-components";
import { gray1 } from "../../StyleConstants";

export const CommentHeaderContainer = styled.div`
  padding-top: 40px;
  background-color: slateGrey;
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
  top: 0;
`;
