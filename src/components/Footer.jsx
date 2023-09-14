import "../stylesheets/footer.css";
import Subscribe from "./footer/Subscribe";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
const Footer = () => {
  const { dispatch } = useContext(ThemeContext);
  return (
    <footer>
      <Subscribe />
    </footer>
  );
};

export default Footer;
