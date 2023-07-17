import { Fragment } from "react";
import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

export default function Header(props) {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Festival Meals - To Go!</h1>
        <HeaderCartButton></HeaderCartButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Japanese street meals."></img>
      </div>
    </Fragment>
  );
}
