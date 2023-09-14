import styled from "styled-components";
import * as styles from "./style";

const StyledButton = styled.button`
  padding: 21px 49px;
  border-radius: 56px;
  border: none;
  background: ${styles.Yellow};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  color: ${styles.Violet};
  ${styles.FontStyle};
  font-weight: 700;
  @media (max-width: 850px) {
    font-size: 14px;
  }
`;

const MoreBtn = styled(StyledButton)`
  background: ${styles.White};
`;

export { StyledButton, MoreBtn };
