import styled from "styled-components";
import * as styles from "./style";

const DefaultInput = styled.input`
  display: inline-block;
  background: ${styles.White};
  border: none;
  border-radius: 7px;
  padding: 16px 40px;
  font-size: 24px;
  color: ${styles.Violet};
  &::placeholder {
    color: #babcbe;
  }

  @media (max-width: 850px) {
    font-size: 14px;
    padding: 16px 16px;
    margin: 5px;
  }
`;

export default DefaultInput;
