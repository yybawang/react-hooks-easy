import React from 'react'
import initialStore from "./initialStore";
import {namespaceParse} from "../utils/namespaceParse";
import {checkString} from "../utils/checkType";

let initialValues = {};
export default function useStore(namespace, initialValue) {
    namespace = namespaceParse(namespace);
    if(initialValue !== undefined){
        checkString(initialValue);
        initialValues[namespace] || (initialValues[namespace] = initialValue);
    }
    const {string, setString, appendString, prependString} = initialStore(namespace, initialValue);
    
    function set(value){
        checkString(value);
        return setString(value);
    }
    
    function reset(){
        return setString(initialValues[namespace]);
    }
    
    function reInitial(value){
        initialValues[namespace] = value;
        return setString(value);
    }
    
    function append(value){
        return appendString(value);
    }
    
    function prepend(value){
        return prependString(value);
    }
    
    return {
        value: string,
        set,
        reset,
        reInitial,
        append,
        prepend,
    };
}
