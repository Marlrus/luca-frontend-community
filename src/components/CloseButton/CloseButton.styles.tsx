import styled from "styled-components";
import { white } from "../../StyleConstants";

export const CloseButtonContainer = styled.div`
  height: 32px;
  width: 32px;
  background-color: ${white};
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 24px;
    width: 24px;
  }
`;
