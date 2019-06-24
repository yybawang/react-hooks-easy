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
        return spliceArray(index, 1, val);
    }
    
    function reset(){
        return setArray(initialValues[namespace]);
    }
    
    function reInitial(values){
        checkArray(values);
        initialValues[namespace] = values;
        return set(values);
    }
    
    function del(index){
        checkNumber(index);
        return spliceArray(index, 1);
    }
    
    function push(val){
        return pushArray(val);
    }
    
    function unshift(val){
        return unshiftArray(val);
    }
    
    function splice(index, length, ...values){
        return spliceArray(index, length, ...values);
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
