import { Fragment, useContext } from "react";
import classes from "./MealItem.module.css";
import MealIemForm from "./MealItemForm";
import CartContext from "../../../Store/cart-context";
const MealIem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <Fragment>
      <li className={classes.meal}>
        <div>
          <h3>{props.name}</h3>
          <div className={classes.description}>{props.description}</div>
          <div className={classes.price}>{price}</div>
        </div>
        <div>
          <MealIemForm onAddToCart={addToCartHandler} />
        </div>
      </li>
    </Fragment>
  );
};
export default MealIem;
