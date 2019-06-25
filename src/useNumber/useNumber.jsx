import React from 'react'
import InitialStore from "./InitialStore";

export function useNumber(namespace, initialValue){
    const {value, set, reset, reInitial, increment, decrement} = InitialStore('number_'+namespace, initialValue);
    
    return {
        value,
        set,
        reset,
        reInitial,
        inc: increment,
        increment,
        dec: decrement,
        decrement,
    }
}
