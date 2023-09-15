import styled from "styled-components";
import { Colors, FontStyles } from "./style";

const StyledButton = styled.button`
  padding: 21px 49px;
  border-radius: 56px;
  border: none;
  background: ${Colors.Yellow};
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
  color: ${Colors.Violet};
  ${FontStyles.FontStyle};
  font-weight: 700;
  @media (max-width: 850px) {
    & span {
      display: block;
    }
    font-size: 14px;
  }
`;

const MoreBtn = styled(StyledButton)`
  background: ${Colors.White};
`;

export { StyledButton, MoreBtn };
