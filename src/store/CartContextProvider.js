import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === "ADD") {
const updatedItems = state.items.concate(action.item)
const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
   return  {
        items: updatedItems,
        totalAmount: updatedTotalAmount
    }
}
    
}

const CartContextProvider = props => {
    const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState)
   const addItem = item => {
       dispatchCartState({type: 'ADD', item: item})
   }
   const removeItem = id => {
    dispatchCartState({type: 'REMOVE', id: id})
   }

  const contextHelper = {
      items :[],
      totalAmount: 0,
      addItem: addItem,
      removeItem: removeItem
  }
      return(
          <CartContext.Provider value={contextHelper}>
              {props.children}
          </CartContext.Provider>
      )
}

export default CartContextProvider;