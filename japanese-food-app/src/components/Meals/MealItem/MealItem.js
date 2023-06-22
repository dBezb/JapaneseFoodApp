import { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../Store/cart-context";

const MealItem = (props) => {
  const cartContext = useContext(CartContext);
  const formattedPrice = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartContext.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.decription}>{props.decription}</div>
        <div className={styles.price}>{formattedPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
