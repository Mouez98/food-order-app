import { useContext } from "react";

import reactDom from "react-dom";
import Backdrop from "../UI/Backdrop";
import CartContext from "../../store/cart-context";

import CartContent from "./CartContent";
import Card from "../UI/Card";
import classes from "./Cart.module.css";

const portalElement = document.getElementById("overlay");

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const items = cartCtx.items.map((item) => {
    return <CartContent {...item} key={item.id} />;
  });

  return (
    <Card className={classes["cart-items"]}>
      {items}
      <div className={classes.order}>
        <div>
          <span>TotalAmount: </span>
          <span>${totalAmount}</span>
        </div>
        <div>
          <button className={classes.btnClose} onClick={props.close}>Close</button>
          <button className={classes.btnOrder}>Order</button>
        </div>
      </div>
    </Card>
  );
};

const CartOverlay = (props) => {
  return (
    <>
      {reactDom.createPortal(<Cart close={props.close} />, portalElement)}
      {reactDom.createPortal(<Backdrop onClick={props.close} />, portalElement)}
    </>
  );
};

export default CartOverlay;
