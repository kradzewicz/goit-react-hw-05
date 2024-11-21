/** @format */

import { NavLink } from "react-router-dom";
import css from "../css/Navigation.module.css";

export function DetailsNavigation() {
  const setActive = ({ isActive }) => {
    return isActive ? "active" : "";
  };

  return (
    <nav className={css.navBox}>
      <NavLink to="cast" className={setActive}>
        Cast
      </NavLink>
      <NavLink to="reviews" className={setActive}>
        Reviews
      </NavLink>
    </nav>
  );
}
