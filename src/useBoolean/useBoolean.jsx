import React from 'react'
import useStore from "./useStore";

export function useBoolean(namespace, initialValue){
    const {value, set, reset, reInitial, toggle} = useStore(namespace, initialValue);
    
    return {
        value,
        set,
        reset,
        reInitial,
        toggle,
    }
}
