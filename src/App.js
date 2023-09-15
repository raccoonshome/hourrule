import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import HourSection from "./components/template.jsx";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

 
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
  
  h1 {
    clip: rect(1px, 1px, 1px, 1px);
    clip-path: inset(50%);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <HourSection />
      <Footer />
    </>
  );
}

export default App;
