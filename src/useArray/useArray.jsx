import React from 'react'
import InitialStore from "./InitialStore";

export function useArray(namespace, initialValue){
    const {value, add, reset, reInitial, push, unshift, del, splice} = InitialStore('array_'+namespace, initialValue);
    
    return {
        value,
        set: add,   // alias
        add,
        reset,
        reInitial,
        push,
        append: push,
        unshift,
        prepend: unshift,
        del,
        splice
    }
}

export function useList(namespace, initialValue){
    return useArray(namespace, initialValue);
}
