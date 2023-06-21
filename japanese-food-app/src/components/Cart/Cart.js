import Modal from "../UI/Modal";
import styles from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={styles["cart-items"]}>
      {[{ id: "m1", name: "Sushi", amout: 2, price: 10.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onHiddenCart={props.onHiddenCart}>
      {cartItems}
      <div className={styles.total}>
        <span>In total:</span>
        <span>49.99$</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHiddenCart}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
