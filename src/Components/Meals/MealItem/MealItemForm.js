import React, {useRef, useContext} from "react";

import CartContext from "../../../store/cart-context";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext)
   const inputRef = useRef()
   const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(inputRef.current.value)
  }
   let items = [...cartCtx.items]
  const filterItemHandler = items.filter(item => {
    return item.id === props.id
  })

  return (
    <form className={classes.form} onSubmit={onSubmitHandler}>
      <Input
      ref={inputRef}
        label="Amount"
        input={{
          type: "number",
          id: "amount" + props.id,
          min: 1,
          max: 5,
          step: 1,
          defaultValue: 1,
        }}
      />
      <button onClick={cartCtx.addItem(filterItemHandler)}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
