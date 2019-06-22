import React from 'react'
import initialStore from "./initialStore";
import {namespaceParse} from "../utils/namespaceParse";
import {checkArray, checkNumber} from "../utils/checkType";

let initialValues = {};
export default function useStore(namespace, initialValue) {
    namespace = namespaceParse(namespace);
    if(initialValue !== undefined){
        checkArray(initialValue);
        initialValues[namespace] || (initialValues[namespace] = initialValue);
    }
    const {array, setArray, pushArray, unshiftArray, spliceArray} = initialStore(namespace, initialValue);
    
    function add(index, val){
        checkNumber(index);
        spliceArray(index, 1, val);
    }
    
    function reset(){
        setArray(initialValues[namespace]);
    }
    
    function reInitial(values){
        checkArray(values);
        set(values);
    }
    
    function del(index){
        checkNumber(index);
        spliceArray(index, 1);
    }
    
    function push(val){
        pushArray(val);
    }
    
    function unshift(val){
        unshiftArray(val);
    }
    
    function splice(index, length, ...values){
        spliceArray(index, length, ...values);
    }
    
    
    return {
        value: array,
        add,
        reset,
        reInitial,
        push,
        unshift,
        del,
        splice
    };
}
