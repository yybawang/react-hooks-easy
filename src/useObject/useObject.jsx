import React from 'react'
import InitialStore from "./InitialStore";

export function useObject(namespace, initialValue){
    const {value, add, reset, reInitial, del, splice} = InitialStore(namespace, initialValue);
    
    return {
        value,
        set: add,   // alias
        add,
        reset,
        reInitial,
        del,
        splice
    }
}

export function useMap(namespace, initialValue){
    return useObject(namespace, initialValue);
}
