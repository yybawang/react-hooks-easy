import React from 'react'
import initialStore from "./initialStore";
import {namespaceParse} from "../utils/namespaceParse";
import {checkBoolean, checkNumber} from "../utils/checkType";

let initialValues = {};
export default (namespace, initialValue) => {
    namespace = namespaceParse(namespace);
    if(initialValue !== undefined){
        checkBoolean(initialValue);
        initialValues[namespace] || (initialValues[namespace] = initialValue);
    }
    const {boolean, setBoolean, toggleBoolean} = initialStore(namespace, initialValue);
    
    function set(val){
        checkBoolean(val);
        return setBoolean(val);
    }
    
    function reset(){
        return set(initialValues[namespace]);
    }
    
    function reInitial(value){
        initialValues[namespace] = value;
        return set(value);
    }
    
    function toggle(){
        return toggleBoolean();
    }
    
    return {
        value: boolean,
        set,
        reset,
        reInitial,
        toggle,
    };
}
