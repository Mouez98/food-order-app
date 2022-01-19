import React, { useState } from "react";

import MealItemForm from "./MealItemForm";
import classes from "./MealItem.module.css";

const MealItem = ({id,name, price, description}) => {
    return  ( <li className={classes.meal}>
    <div   >
      <h3>{name}</h3>
      <div className={classes.description}>{description}</div>
      <div className={classes.price}>${price.toFixed(2)}</div>
    </div>
    <MealItemForm id={id}/>
    </li>
  )

};

export default MealItem;
