import styled from "styled-components";
import * as styles from "./style";

const Wrap = styled.div`
  position: fixed;
  inset: 0;
  margin: auto;
  width: 50vh;
  height: fit-content;
  background-color: ${styles.White};
  border-radius: 30px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
  font-weight: 700;
  padding: 3%;
`;

const Title = styled.h1`
  color: ${styles.Violet};
  font-size: 48px;
`;

const Content = styled.p`
  color: ${styles.Violet};
  font-size: 24px;
`;

export { Wrap, Title, Content };
