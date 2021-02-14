import styled from "styled-components";
import { size } from "../../StyleConstants";

export const LayoutGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 288px auto;

  @media screen and (max-width: ${size.desktop}) {
    display: block;
  }
`;
