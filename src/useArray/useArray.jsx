import React from 'react'
import useStore from "./useStore";

export function useArray(namespace, initialValue){
    const {value, add, reset, reInitial, push, unshift, del, splice} = useStore(namespace, initialValue);
    
    return {
        value,
        set: add,
        add,
        reset,
        reInitial,
        append: push,
        push,
        prepend: unshift,
        unshift,
        del,
        splice
    }
}

export function useList(namespace, initialValue) {
    return useArray(namespace, initialValue)
}
