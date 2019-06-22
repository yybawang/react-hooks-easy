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
        setNumber(val);
    }
    
    function reset(){
        set(initialValues[namespace]);
    }
    
    function reInitial(value){
        set(value);
    }
    
    function increment(inc = 1){
        checkNumber(inc);
        incrementNumber(inc);
    }
    
    function decrement(inc = 1){
        checkNumber(inc);
        decrementNumber(inc);
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
