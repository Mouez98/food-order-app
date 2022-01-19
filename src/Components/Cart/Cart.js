import reactDom from 'react-dom';
import Backdrop from '../UI/Backdrop';

import CartContent from './CartContent';

const portalElement = document.getElementById('overlay')

const Cart = (props) => {
    return <>
    {reactDom.createPortal(<CartContent close={props.close} />, portalElement)}
    {reactDom.createPortal(<Backdrop onClick={props.close} />, portalElement)}
    </>
}

export default Cart;