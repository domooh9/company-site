import React, { createContext, useReducer } from "react";
import { navReducer } from "../reducers/ThemeReducer";
export const ThemeContext = createContext();
const ThemeContextProvider = (props) => {
  const [items, dispatch] = useReducer(navReducer, [
    { link: "/", value: "Our services" },
    { link: "/products", value: "Computers available" },
    { link: "#about-us", value: "about us" },
    { link: "/blog", value: "blog" },
    { link: "#useful-links", value: "useful links" },
  ]);
  return (
    <ThemeContext.Provider value={{ items, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
