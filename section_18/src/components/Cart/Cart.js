import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import Checkout from "./Checkout";
import useHttp from "../../hooks/use-http";

import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";

const FIREBASE_URL = 'https://react-http-d90bd-default-rtdb.firebaseio.com';
const ORDERS_DB = '/orders.json';

export default function Cart(props) {
  const { sendRequest: fetchTasks } = useHttp();
  const [isCheckout, setIsCheckout] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const submitOrderHandler = async (userData) => {
    setIsSubmitting(true);
    await fetchTasks(
      () => {
        cartCtx.clearCart();
        setIsCheckout(false);
      }, FIREBASE_URL + ORDERS_DB, 'POST', JSON.stringify({
        order: cartCtx.items,
        user: userData
      })
      
    );
      setDidSubmit(true);
      setIsSubmitting(false);
      cartCtx.clearCart();
  };

  const cartModalContentIsSubmitting = (
    <p>Sending order data...</p>
  );

  const cartModalContentDidSubmit = (
    <>
      <p>Successfully sent the order!</p>
      <div className={classes.actions}>
        <button className={classes.button} onClick={props.onClose}>
          Close 閉じる
        </button>
      </div>
    </>
  );



  const modalActions = (
    <div className={classes.actions}>
    <button className={classes["button--alt"]} onClick={props.onClose}>
      Close 閉じる
    </button>
    {hasItems && <button className={classes.button} onClick={orderHandler}>Order 注文する</button>}
  </div>
  )

  const cartModalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount 合計金額</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && hasItems && <Checkout onSubmit={submitOrderHandler} onCancel={props.onClose} />}
      {!isCheckout && modalActions} 
    </>
  );



  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && cartModalContentIsSubmitting}
      {!isSubmitting && didSubmit && cartModalContentDidSubmit}
    </Modal>
  );
}
