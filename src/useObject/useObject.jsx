import React from 'react'
import useStore from "./useStore";

export function useObject(namespace, initialValue){
    const {value, add, reset, reInitial, del, splice} = useStore(namespace, initialValue);
    
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
