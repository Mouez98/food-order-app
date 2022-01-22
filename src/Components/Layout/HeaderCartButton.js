import { useState, useContext, useEffect } from "react";

import Cart from "../Cart/Cart";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = () => {
  const ctx = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);
  const [animatedBtn, setAnimatedBtn] = useState(false);

  let btnClasses = `${classes.button} ${animatedBtn ? classes.bump : ''} `;

  const { items } = ctx;
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setAnimatedBtn(true);
    const style = setTimeout(() => {
      setAnimatedBtn(false);
    }, 300);
    return () => {
      clearTimeout(style);
    };
  }, [items]);

  const showCartHandler = () => {
    setShowCart(!showCart);
  };

  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <>
      {showCart && <Cart close={showCartHandler} />}
      <button className={btnClasses} onClick={showCartHandler}>
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
