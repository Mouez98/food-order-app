import React, { useReducer } from "react";
import CartContext from "./cart-context";

let defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItem = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };

  const removeItem = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const contextHelper = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItem,
    removeItem: removeItem,
  };
  return (
    <CartContext.Provider value={contextHelper}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
