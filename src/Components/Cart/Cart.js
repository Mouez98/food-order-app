import { useContext, useState } from "react";

import reactDom from "react-dom";
import Backdrop from "../UI/Backdrop";
import CartContext from "../../store/cart-context";
import CartContent from "./CartContent";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import Checkout from "./Checkout";

const portalElement = document.getElementById("overlay");

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);

  const cartCtx = useContext(CartContext);

  const hasItems = cartCtx.items.length > 0;
  const totalAmount = cartCtx.totalAmount.toFixed(2);

  const cartAddItemHandler = (item) => {
    cartCtx.addItem(item);
  };

  const cartRemoveItemHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const checkoutHandler = () => setIsCheckout(true);

  const modalActions = (
    <div className={classes.btnAction}>
      <button className={classes.btnClose} onClick={props.close}>
        Close
      </button>
      {hasItems && (
        <button className={classes.btnOrder} onClick={checkoutHandler}>
          Order
        </button>
      )}
    </div>
  );

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
        <div className={classes.totalPrice}>
          <h4>TotalAmount: </h4>
          <h4>${totalAmount}</h4>
        </div>
        {isCheckout && <Checkout close={props.close} />}
        {! isCheckout && modalActions}
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
