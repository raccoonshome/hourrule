import styled from "styled-components";
import * as styles from "./style";

const Modal = styled.div`
  position: fixed;
  inset: 0;
  margin: auto;
  width: fit-content;
  height: fit-content;
  background-color: ${styles.White};
  border-radius: 30px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.5);
  font-weight: 700;
  padding: 68px;
`;

const Title = styled.h1`
  color: ${styles.Violet};
  font-size: 96px;
`;

const Content = styled.p`
  color: ${styles.Violet};
  font-size: 36px;
`;

export { Modal, Title, Content };
