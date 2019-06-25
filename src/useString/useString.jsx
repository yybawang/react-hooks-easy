import React from 'react'
import InitialStore from "./InitialStore";

export function useString(namespace, initialValue){
    const {value, set, reset, reInitial, append, prepend} = InitialStore('string_'+namespace, initialValue);
    
    return {
        value,
        set,
        reset,
        reInitial,
        append,
        prepend,
    }
}
