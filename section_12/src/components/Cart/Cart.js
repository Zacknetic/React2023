import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

export default function Cart(props) {
  const cartItems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Takoyaki", amount: 2, price: 10.00 }].map((item) => {
        return <li>{item.name}</li>;
      })}
    </ul>
  ); //

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount 合計金額</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close 閉じる</button>
        <button className={classes.button}>Order 注文する</button>
        </div>
    </Modal>
  );
}
