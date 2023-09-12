import "../stylesheets/footer.css";
import NavSocial from "./nav/NavSocial";
import Subscribe from "./footer/Subscribe";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
const Footer = () => {
  const { dispatch } = useContext(ThemeContext);
  return (
    <footer>
      <NavSocial />
      <Subscribe />
    </footer>
  );
};

export default Footer;
