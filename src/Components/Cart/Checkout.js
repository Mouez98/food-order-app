import classes from './Checkout.module.css'

const Checkout = props => {
  return <form>
      <div className={classes['form-control']}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' />
      </div>
      <div className={classes['form-control']}>
        <label htmlFor='street'>Your street</label>
        <input type='text' id='street' />
      </div>
      <div className={classes['form-control']}>
        <label htmlFor='codePostal'>Your Code postal</label>
        <input type='text' id='name' />
      </div>
      <div className={classes['form-control']}>
        <label htmlFor='city'>Your city</label>
        <input type='text' id='city' />
      </div>
      <button type='button'>Cancel</button>
      <button >Confirm</button>
  </form>
}

export default Checkout;