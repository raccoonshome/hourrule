import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/header.jsx";
import Section from "./components/section.jsx";
import Footer from "./components/footer.jsx";
import HourSection from "./components/template.jsx";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  h1{
    font-size: 0.1px;
  }
  *{
    color: white;
    text-align: center;
    font-family: tvN Enjoystories;
  }
  body{
    background-color: #5B2386;
    display: flex;
    flex-direction: column;
    justify-contents: center;
    align-items: center;
    line-height: 1.4;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Section />
      <HourSection />
      <Footer />
    </>
  );
}

export default App;
