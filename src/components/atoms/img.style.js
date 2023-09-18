import styled from "styled-components";

const Image = styled.img`
  display: block;
  max-width: calc(100% / 2);
  margin: auto;
  object-fit: contain;
  object-position: center;
`;

const Img = ({ src, alt, style }) => {
  return (
    <Image
      src={`${process.env.PUBLIC_URL}/${src}`}
      alt={alt ?? ""}
      style={style}
    />
  );
};

export default Img;
