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
  const hasItems = cartCtx.items.length > 0;
  const totalAmount = cartCtx.totalAmount.toFixed(2);
  const cartAddItemHandler = (item) => {};
  const cartRemoveItemHandler = (id) => {};
  const items = cartCtx.items.map((item) => {
    return (
      <CartContent
        {...item}
        key={item.id}
        onRemove={cartRemoveItemHandler.bind(null, item.id)}
        onAdd={cartAddItemHandler.bind(null, item)}
      />
    );
  });

  return (
    <Card className={classes["cart-items"]}>
      {items}
      <div className={classes.order}>
        <div>
          <h4>TotalAmount: </h4>
          <h4>${totalAmount}</h4>
        </div>
        <div>
          <button className={classes.btnClose} onClick={props.close}>
            Close
          </button>
          {hasItems && <button className={classes.btnOrder}>Order</button>}
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
