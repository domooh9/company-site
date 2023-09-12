import Blog from "./components/main/Blog";
import Rout from "./Rout";
import Computers from "./components/main/Computers";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Rout />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/products" element={<Computers />} />
      </Routes>
    </>
  );
};

export default App;
