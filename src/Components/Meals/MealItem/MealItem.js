import React, {useContext} from "react";

import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";

const MealItem = ({ id, name, price, description }) => {
  const cartCtx = useContext(CartContext);
    
  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: id,
      name: name,
      price: price,
      amount: amount
    })
  }

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>${price.toFixed(2)}</div>
      </div>
      <MealItemForm addToCart={addToCartHandler}/>
    </li>
  );
};

export default MealItem;
