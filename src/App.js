import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";
import HourSection from "./components/layout/section.jsx";
import GlobalStyle from "./components/style.js";

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
