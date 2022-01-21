import { useState, useContext } from "react";

import Cart from "../Cart/Cart";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const ctx = useContext(CartContext);
  const [showCart, setShowCart] = useState(false)

  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  

  const showCartHandler = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      {showCart && <Cart close={showCartHandler} />}
      <button className={classes.button} onClick={showCartHandler}>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
      </button>
    </>
  );
};

export default HeaderCartButton;
