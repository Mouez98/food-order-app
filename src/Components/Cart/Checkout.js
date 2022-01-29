import useInput from "../../hooks/use-input";

import classes from "./Checkout.module.css";

const checkValidity = (value) => value.trim() !== "";

const Checkout = (props) => {
  const {
    value: enteredName,
    hasError: invalidName,
    onChangeHandler: onChangeName,
    onBlurHandler: onBlurName,
    reset: resetName,
  } = useInput(checkValidity);

  const {
    value: enteredStreet,
    isValid: isValidStreet,
    onChangeHandler: onChangeStreet,
    onBlurHandler: onBlurStreet,
    reset: resetStreet,
  } = useInput(checkValidity);

  const {
    value: enteredCode,
    isValid: isValidCode,
    onChangeHandler: onChangeCode,
    onBlurHandler: onBlurCode,
    reset: resetCode,
  } = useInput(checkValidity);

  const {
    value: enteredCity,
    isValid: isValidCity,
    onChangeHandler: onChangeCity,
    onBlurHandler: onBlurCity,
    reset: resetCity,
  } = useInput(checkValidity);

  let validForm = false ;
  if(enteredName && enteredStreet && enteredCode && enteredCity){
    validForm = true
  }

  const classInputName = `${classes.control} ${!invalidName ? '' : classes.invalid}`
  const invalidInputStreet = isValidStreet ? "control invalid" : "control";
  const invalidInputCode = isValidCode ? "control invalid" : "control";
  const invalidInputCity = isValidCity ? "control invalid" : "control";

  const confirmHandler = (e) => {
    e.preventDefault();
    if(!validForm){
      console.log('NotValid');
      return
    }
    console.log('Valid');

    resetName();
    resetStreet();
    resetCode();
    resetCity()
  };
  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes[classInputName]}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          type="text"
          id="name"
          onChange={onChangeName}
          onBlur={onBlurName}
        />
      </div>
      <div className={classes[invalidInputStreet]}>
        <label htmlFor="street">Your street</label>
        <input
          type="text"
          id="street"
          value={enteredStreet}
          onBlur={onBlurStreet}
          onChange={onChangeStreet}
        />
      </div>
      <div className={classes[invalidInputCode]}>
        <label htmlFor="codePostal">Your Code postal</label>
        <input
          value={enteredCode}
          onBlur={onBlurCode}
          onChange={onChangeCode}
          type="text"
          id="name"
        />
      </div>
      <div className={classes[invalidInputCity]}>
        <label htmlFor="city">Your city</label>
        <input
          type="text"
          id="city"
          value={enteredCity}
          onBlur={onBlurCity}
          onChange={onChangeCity}
        />
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
