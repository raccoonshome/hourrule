import styled from "styled-components";
import { Fonts, Margin } from "../style";

const DefaultSection = styled.section`
  margin: ${Margin} auto;
`;

const StyledTemplate = styled.p`
  ${Fonts.FontStyle}
  margin: 17px auto;
`;

const DivButtons = styled.div`
  margin-top: ${Margin};
  display: flex;
  justify-content: center;
  gap: 18px;
  & > img {
    transform: translate(-10px, 20px);
  }
`;

export { DefaultSection, StyledTemplate, DivButtons };
