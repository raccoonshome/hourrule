import styled from "styled-components";

const Img = styled.img`
  display: block;
  max-width: calc(100% / 2);
  margin: auto;
  object-fit: contain;
  object-position: center;
`;

export default Img;

const Logo = styled(Img)`
  position: absolute;
  inset: 0;
  max-width: calc(100% / 4);
`;

export { Logo };
