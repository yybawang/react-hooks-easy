import React from 'react'
import initialStore from "./initialStore";
import {namespaceParse} from "../utils/namespaceParse";
import {checkNumber} from "../utils/checkType";

let initialValues = {};
export default function useStore(namespace, initialValue) {
    namespace = namespaceParse(namespace);
    if(initialValue !== undefined){
        checkNumber(initialValue);
        initialValue = Number(initialValue);
        initialValues[namespace] || (initialValues[namespace] = initialValue);
    }
    const {number, setNumber, incrementNumber, decrementNumber} = initialStore(namespace, initialValue);
    
    function set(val){
        checkNumber(val);
        return setNumber(val);
    }
    
    function reset(){
        return set(initialValues[namespace]);
    }
    
    function reInitial(value){
        initialValues[namespace] = value;
        return set(value);
    }
    
    function increment(inc = 1){
        checkNumber(inc);
        return incrementNumber(inc);
    }
    
    function decrement(inc = 1){
        checkNumber(inc);
        return decrementNumber(inc);
    }
    
    return {
        value: number,
        set,
        reset,
        reInitial,
        increment,
        decrement,
    };
}
