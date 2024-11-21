/** @format */

import { NavLink } from "react-router-dom";
import css from "../css/Navigation.module.css";

export function Navigation() {
  const setActive = ({ isActive }) => {
    return isActive ? "active" : "";
  };

  return (
    <nav className={css.navBox}>
      <NavLink to="/" className={setActive}>
        Home
      </NavLink>
      <NavLink to="/movies" className={setActive}>
        Movies
      </NavLink>
    </nav>
  );
}
