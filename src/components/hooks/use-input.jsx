import axios from "axios";
import { useState } from "react";

const useInput = validateValue => {
    const [enteredValue, setEnteredValue]           =   useState('');
    const [isTouched, setIsTouched]                 =   useState(false);
    const [validation, setValidation]               =   useState(true);
    const [validationId, setValidationId]           =   useState(true);
    const valueIsValid                              =   validateValue(enteredValue);
    const hasError                                  =   !valueIsValid && isTouched;

    const valueChangeHandlerWithEmailValidation  =   event =>{
        setEnteredValue(event.target.value);
        axios.post("https://pure-shelf-22063.herokuapp.com/api/signup/check/email", {
            userMemberEmail: event.target.value
        })
        .then(res => {
            if(res.data.validation === true){
                setValidation(true);
            }else{
                setValidation(false);
            }
        })
        .catch(err => console.log(err));
    };
    const valueChangeHandlerWithIdValidation  =   event =>{
        setEnteredValue(event.target.value);
        axios.post("https://pure-shelf-22063.herokuapp.com/api/signup/check/id", {
            userMemberId: event.target.value
        })
        .then(res => {
            if(res.data.validation === true){
                setValidationId(true);
            }else{
                setValidationId(false);
            }
        })
        .catch(err => console.log(err));
    };

    const valueChangeHandler                =   event =>{
        setEnteredValue(event.target.value);
    };
    const inputBlurHandler                  =   event =>{
        setIsTouched(true);
    };

    const reset                             =   () =>{
        setEnteredValue('');
        setValidation(true);
        setIsTouched(false);
    };

    return{
        value: enteredValue,
        isValid: valueIsValid,
        validation,
        validationId,
        hasError,
        valueChangeHandlerWithEmailValidation,
        valueChangeHandlerWithIdValidation,
        valueChangeHandler,
        inputBlurHandler,
        reset
    };
};

export default useInput;