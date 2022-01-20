import React, {useRef, useContext} from "react";
import { useState } from "react/cjs/react.development";

import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [isValidAMount , setValidAMount] = useState(true)
  // const cartCtx = useContext(CartContext)
   const inputRef = useRef()
   const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = +inputRef.current.amount
    
    if(enteredAmount === 0 || enteredAmount > 6 ) {
       setValidAMount(false)
       return;
    } 
     props.addToCart(enteredAmount)
  }
  

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
      ref={inputRef}
        label="Amount"
        input={{
          type: "number",
          id: "amount" + props.id,
          min: 0,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button type="submit">+ Add</button>
    </form>
  );
};

export default MealItemForm;
