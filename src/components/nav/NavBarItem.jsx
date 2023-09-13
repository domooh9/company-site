import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Link } from "react-router-dom";

const NavBarItem = ({ item }) => {
  const { dispatch } = useContext(ThemeContext);
  const activeClass = item.value === "home" ? "nav-item active" : "nav-item";

  // Define the URL path for the Link
  const linkPath = item.link.startsWith("/") ? item.link : `/${item.link}`;

  return (
    <li className={activeClass}>
      <Link to={linkPath}>
        <span
          onClick={(event) =>
            dispatch({ type: "IS_ACTIVE", event, elem: item.link })
          }>
          {item.value}
        </span>
      </Link>
    </li>
  );
};

export default NavBarItem;
