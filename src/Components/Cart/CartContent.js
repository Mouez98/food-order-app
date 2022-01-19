import Card from '../UI/Card';
import classes from './Cart.module.css';


const CartContent = (props) => {
   return <Card className={classes['cart-items']}>
       <div className={classes.meal}>
        <h3>Meal</h3>
        <h4>$12 <span>x5</span></h4>
        </div>
     <div className={classes.total}>
         <span>Total Price</span>
         <span>$60</span>
         </div>
         <div className={classes.actions}>
           
             <button className={classes['button--alt']} onClick={props.close}>Close</button>
             <button className={classes['button']}>Order</button>
         
     </div>
  </Card>
};

export default CartContent