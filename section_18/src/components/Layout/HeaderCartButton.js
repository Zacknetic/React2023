// Inside HeaderCartButton.js
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

import { useContext, useEffect, useState } from "react";

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);
  const numCartItems = cartCtx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const [shouldWiggle, setShouldWiggle] = useState(false);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    setShouldWiggle(prevState => !prevState);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.items]);

  const handleClick = (event) => {
    props.onClick(event);
   
  };

  return (
    <button className={btnClasses} onClick={handleClick}>
      <span className={classes.icon}>
        <CartIcon shouldWiggle={shouldWiggle} />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numCartItems}</span>
    </button>
  );
}
