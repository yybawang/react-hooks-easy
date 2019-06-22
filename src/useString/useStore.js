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
    
    function set(val){
        checkString(val);
        setString(val);
    }
    
    function reset(){
        setString(initialValues[namespace]);
    }
    
    function append(val){
        appendString(val);
    }
    
    function prepend(val){
        prependString(val);
    }
    
    return {
        value: string,
        set,
        reset,
        reInitial: set,
        append,
        prepend,
    };
}
