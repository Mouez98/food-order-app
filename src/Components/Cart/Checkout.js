import useInput from "../../hooks/use-input";

import classes from "./Checkout.module.css";

const stringValidity = (value) => value.trim() !== "";
const codePostalValidity = value => value.length === 5;


const Checkout = (props) => {
  const {
    value: enteredName,
    hasError: isValidName,
    onChangeHandler: onChangeName,
    onBlurHandler: onBlurName,
    reset: resetName,
  } = useInput(stringValidity);

  const {
    value: enteredStreet,
    hasError: isValidStreet,
    onChangeHandler: onChangeStreet,
    onBlurHandler: onBlurStreet,
    reset: resetStreet,
  } = useInput(stringValidity);

  const {
    value: enteredCode,
    hasError: isValidCode,
    onChangeHandler: onChangeCode,
    onBlurHandler: onBlurCode,
    reset: resetCode,
  } = useInput(codePostalValidity);

  const {
    value: enteredCity,
    hasError: isValidCity,
    onChangeHandler: onChangeCity,
    onBlurHandler: onBlurCity,
    reset: resetCity,
  } = useInput(stringValidity);

  let validForm = false ;
  if(enteredName && enteredStreet && enteredCode && enteredCity){
    validForm = true
  }

  const classInputName = `${classes.control} ${!isValidName ? '' : classes.invalid}`
  const classInputStreet = `${classes.control} ${!isValidStreet ? '' : classes.invalid}`
  const classInputCode = `${classes.control} ${isValidCode ? classes.invalid : ''}`
  const classInputCity = `${classes.control} ${isValidCity ? classes.invalid : ''}`

  const confirmHandler = (e) => {
    e.preventDefault();
    if(validForm){
     resetName();
     resetStreet();
     resetCode();
     resetCity()
    }
  
  };
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classInputName}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={onChangeName}
          onBlur={onBlurName}
        />
        {isValidName && <p>Please enter your name.</p>}
      </div>
      <div className={classInputStreet}>
        <label htmlFor="street">Your street</label>
        <input
          type="text"
          id="street"
          value={enteredStreet}
          onBlur={onBlurStreet}
          onChange={onChangeStreet}
        />
        {isValidStreet && <p>Please enter a valid street.</p>}
      </div>
      <div className={classInputCode}>
        <label htmlFor="codePostal">Your Code postal</label>
        <input
          value={enteredCode}
          onBlur={onBlurCode}
          onChange={onChangeCode}
          type="text"
          id="name"
        />
        {isValidCode && <p>Please enter a valid Code Postal (5 chars).</p>}
      </div>
      <div className={classInputCity}>
        <label htmlFor="city">Your city</label>
        <input
          type="text"
          id="city"
          value={enteredCity}
          onBlur={onBlurCity}
          onChange={onChangeCity}
        />
        {isValidName && <p>Please enter a valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.close}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
