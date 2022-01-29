import { useReducer } from "react";

const inputHelper = {
    value: '',
    isTouched: false
}

const inputReducer = (state, action) => {
    if(action.type === 'INPUT'){
        return {value: action.value, isTouched: state.isTouched }
    }

    if(action.type === 'BLUR'){
        return {value: state.value, isTouched: true}
    }

    if(action.type === 'RESET'){
        return {value: '', isTouched: false}
    }
   return inputReducer
}


const useInput = validitiy => {
const [valueState, dispatch] = useReducer(inputReducer, inputHelper);

const isValid = validitiy(valueState.value)
const hasError = !isValid && valueState.isTouched;

const onChangeHandler = e => dispatch({type: 'INPUT', value: e.target.value});
const onBlurHandler = () => dispatch({type: 'BLUR'});
const reset = () => dispatch({type: 'RESET'});

return {
    value: valueState.value,
    hasError,
    onChangeHandler,
    onBlurHandler,
    reset
}

}

export default useInput;