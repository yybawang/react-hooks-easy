import React from 'react'
import useStore from "./useStore";

export function useString(namespace, initialValue){
    const {value, set, reset, reInitial, append, prepend} = useStore(namespace, initialValue);
    
    return {
        value,
        set,
        reset,
        reInitial,
        append,
        prepend,
    }
}
