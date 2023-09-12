import Nav from "./components/Nav";
import Header from "./components/Header";
import ThemeContextProvider from "./contexts/ThemeContext";
import Footer from "./components/Footer";
import Main from "./components/Main";

const Rout = () => {
  return (
    <>
      <ThemeContextProvider>
        <Nav />
        <Header />
        <Main />
        <Footer />
      </ThemeContextProvider>
    </>
  );
};

export default Rout;
