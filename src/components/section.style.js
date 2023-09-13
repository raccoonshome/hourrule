import styled from "styled-components";
import * as styles from "./style";

const DefaultSection = styled.section`
  margin: ${styles.Margin} auto;
`;

const Italic = styled.p`
  color: ${styles.Yellow};
  font-style: italic;
  margin-bottom: ${styles.Margin};
`;

const Strong = styled.strong`
  font-weight: bold;
`;

const Mega = styled(Strong)`
  font-size: 72px;
`;

const StyledTemplate = styled.p`
  ${styles.FontStyle}
  margin: 17px auto;

  @media (max-width: 850px) {
    span {
      display: block;
    }
  }
`;

const DivButtons = styled.div`
  margin-top: ${styles.Margin};
  display: flex;
  justify-content: center;
  gap: 18px;
  & img {
    transform: translate(-10px, 20px);
  }
`;

export { DefaultSection, Italic, Strong, StyledTemplate, DivButtons, Mega };
