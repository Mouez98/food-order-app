
import classes from "./Cart.module.css";

const CartContent = (props) => {
  return (
    <li className={classes["cart-item"]}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${props.price}</span>
          <span className={classes.amount}>x{props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button>−</button>
        <button>+</button>
      </div>
    </li>
  );
};

export default CartContent;
