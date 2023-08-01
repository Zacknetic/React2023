import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
    const activeStyle = ({isActive}) => (isActive ? classes.active : undefined)
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="/" className={activeStyle} end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/products" className={activeStyle} end>Products</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
