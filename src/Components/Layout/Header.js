import React from "react";

import classes from "./Header.module.css";
import imgMeals from '../../assets/meals.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h2>ReactMeals</h2>
       <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={imgMeals} alt="meals" />
      </div>
    </>
  );
};

export default Header;
