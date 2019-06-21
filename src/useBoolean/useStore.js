import React, {useState} from 'react'
import initialStore from "./initialStore";
import {namespaceParse} from "../utils/namespaceParse";

export default (namespace, initialValue) => {
    const {value, set, toggle} = initialStore(namespace);
    namespace = namespaceParse(namespace);
    
    if(initialValue !== undefined){
        if(typeof initialValue !== 'boolean'){
            throw new Error('The initial value is not a boolean type');
        }
        setBoolean(namespace, initialValue);
    }
    
    function setBoolean(val){
        set(val);
    }
    
    function toggleBoolean(){
        toggle();
    }
    
    return {
        boolean: value,
        setBoolean,
        toggleBoolean,
    };
}