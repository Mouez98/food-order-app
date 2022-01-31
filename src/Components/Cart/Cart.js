import { useContext, useState } from "react";

import reactDom from "react-dom";
import Backdrop from "../UI/Backdrop";
import CartContext from "../../store/cart-context";
import CartContent from "./CartContent";
import Card from "../UI/Card";
import Checkout from "./Checkout";
import Loading from '../../imported/Loading'

import classes from "./Cart.module.css";

const portalElement = document.getElementById("overlay");

const Cart = (props) => {
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

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

  const onSubmitOrder = (userData) => {
    setIsSubmitting(true);
    fetch(
      "https://food-order-2a829-default-rtdb.europe-west1.firebasedatabase.app/orders.json",
      {
        method: "POST",
        body: JSON.stringify({
          data: userData,
          orderItems: cartCtx.items,
        }),
      }
    );
    cartCtx.clearItems()
    setIsSubmitting(false);
    setDidSubmit(true);
  };

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
  const modalContent = (
    <>
      {items}
      <div className={classes.order}>
        <div className={classes.totalPrice}>
          <h4>TotalAmount: </h4>
          <h4>${totalAmount}</h4>
        </div>
        {isCheckout && <Checkout onOrder={onSubmitOrder} close={props.close} />}
        {!isCheckout && modalActions}
      </div>
    </>
  );

  const isSubmittingContent = <Loading color="#4d1601"/> ;

  const didSubmitContent = (
    <>
      <p>Successfully sent the order.</p>
      <div className={classes.btnAction}>
        <button className={classes.btnOrder} onClick={props.close}>
          Okay
        </button>
      </div>
    </>
  );

  return (
    <Card className={classes["cart-items"]}>
      {!isSubmitting && !didSubmit && modalContent}
      {isSubmitting && isSubmittingContent}
      {didSubmit && didSubmitContent}
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
