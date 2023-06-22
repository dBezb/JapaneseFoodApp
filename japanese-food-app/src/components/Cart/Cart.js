import CartContext from "../../Store/cart-context";
import Modal from "../UI/Modal";
import styles from "./Cart.module.css";
import { useContext } from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartContext = useContext(CartContext);

  const totalAmount = `$${Math.abs(cartContext.totalAmount).toFixed(2)}`;

  const hasItems = cartContext.items.length > 0;

  const removeCartItemHandler = (id) => {
    cartContext.removeItem(id);
  };

  const addCartItemHandler = (item) => {
    cartContext.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles["cart-items"]}>
      {cartContext.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={addCartItemHandler.bind(null, item)}
          onRemove={removeCartItemHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onHiddenCart={props.onHiddenCart}>
      {cartItems}
      <div className={styles.total}>
        <span>In total:</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles["button--alt"]} onClick={props.onHiddenCart}>
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
