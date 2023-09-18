import styled from "styled-components";
import { Colors } from "../style";

const DefaultInput = styled.input`
  display: inline-block;
  background: ${Colors.White};
  border: none;
  border-radius: 7px;
  padding: 16px;
  margin: 5px;
  font-size: 24px;
  color: ${Colors.Violet};
  &::placeholder {
    color: #babcbe;
  }
`;

export default DefaultInput;
