import styled from "styled-components";
import { size } from "../../StyleConstants";

export const ResponsiveGridContainer = styled.div`
  max-width: 704px;
  margin: 0 auto;
  display: grid;
  column-gap: 24px;
  grid-template-columns: repeat(8, 1fr);

  @media screen and (min-width: ${size.desktop}) {
    padding: unset;
  }
`;
