import Blog from "./components/main/Blog";
import Rout from "./Rout";
import Computers from "./components/main/Computers";
import { Icon } from "@iconify/react";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="whatsapp-icon">
        <a
          href="https://wa.me/+254710809487"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer">
          <Icon className="whatsapp_float " icon="logos:whatsapp-icon" />
        </a>
      </div>
      <Routes>
        <Route path="/" element={<Rout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<Computers />} />
      </Routes>
    </>
  );
};

export default App;
