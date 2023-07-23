import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

export default function Cart(props) {
  const [isCheckout, setIsCheckout] = useState(false);
  const cartCtx = useContext(CartContext);

  const totalAmount = `${Number(
    cartCtx.totalAmount.toFixed(2)
  ).toLocaleString()}円`;
  const hasItems = cartCtx.items.length > 0;

const cartItemRemoveHandler = (id) => {
  cartCtx.removeItem(id);
};

const cartItemAddHandler = (item) => {
  cartCtx.addItem({ ...item, amount: 1 });
};

  const cartItems = (
    <ul className={classes.cartItems}>
      {cartCtx.items.map((item) => {
        return (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          ></CartItem>
        );
      })}
    </ul>
  );

  const orderHandler = () => {
   setIsCheckout(true);
  };

  const modalActions = (
    <div className={classes.actions}>
    <button className={classes["button--alt"]} onClick={props.onClose}>
      Close 閉じる
    </button>
    {hasItems && <button className={classes.button} onClick={orderHandler}>Order 注文する</button>}
  </div>
  )


  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount 合計金額</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && hasItems && <Checkout onSubmit={orderHandler} onCancel={props.onClose} />}
      {!isCheckout && modalActions}
    </Modal>
  );
}
