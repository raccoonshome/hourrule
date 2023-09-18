import styled from "styled-components";
import { Margin } from "../style";
const StyledHeader = styled.header`
  max-width: 1200px;
  padding: 5vh;
`;

const H1 = styled.div`
  margin: ${Margin} 0;
  position: relative;
`;

const Quotes = styled.div`
  display: flex;
  flex-basis: 373px;
  min-width: 0;
  flex-shrink: 0;
  flex-grow: 0;
  gap: 14px;
  &::before {
    content: url("openQuotes.svg");
    margin-left: auto;
  }
  &::after {
    content: url("closeQuotes.svg");
    margin-right: auto;
  }
`;

export { StyledHeader, H1, Quotes };
