import React from 'react'
import InitialStore from "./InitialStore";

export function useBoolean(namespace, initialValue){
    const {value, set, reset, reInitial, toggle} = InitialStore('boolean_'+namespace, initialValue);
    
    return {
        value,
        set,
        reset,
        reInitial,
        toggle,
    }
}
