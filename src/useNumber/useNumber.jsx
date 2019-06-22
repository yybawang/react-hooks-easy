import React from 'react'
import useStore from "./useStore";

export function useNumber(namespace, initialValue){
    const {value, set, reset, reInitial, increment, decrement} = useStore(namespace, initialValue);
    
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
