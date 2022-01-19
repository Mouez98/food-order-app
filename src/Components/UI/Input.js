import React, { useState , useRef, useImperativeHandle } from 'react';

import classes from './Input.module.css';

const Input = React.forwardRef((props,ref) => {
   const [value, setValue ] = useState(props.input.defaultValue)
   const inputValueRef = useRef();

   useImperativeHandle(ref,()=>({
       value: inputValueRef.current.value
   }))
   
   return <div className={classes.input} >
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={inputValueRef}   onChange={()=> setValue(value + 1)}/>
    </div>

})

export default Input;