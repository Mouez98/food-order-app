import {useState} from 'react';

import Cart from "../Cart/Cart";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [showCart , setShowCart] = useState(false);

  const showCartHandler = () => {
    setShowCart(!showCart)
  }
  return (
    <>
     {showCart && <Cart close={showCartHandler}/>}
    <button className={classes.button} onClick={showCartHandler}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
    </>
  );
};

export default HeaderCartButton;
