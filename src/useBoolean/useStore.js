import React from 'react'
import initialStore from "./initialStore";
import {namespaceParse} from "../utils/namespaceParse";
import {checkBoolean, checkNumber} from "../utils/checkType";

export default (namespace, initialValue) => {
    namespace = namespaceParse(namespace);
    if(initialValue !== undefined){
        checkBoolean(initialValue);
    }
    const {boolean, setBoolean, toggleBoolean} = initialStore(namespace, initialValue);
    
    function set(val){
        checkBoolean(val);
        setBoolean(val);
    }
    
    function reset(){
        set(false);
    }
    
    function reInitial(value){
        set(value);
    }
    
    function toggle(){
        toggleBoolean();
    }
    
    return {
        value: boolean,
        set,
        reset,
        reInitial,
        toggle,
    };
}
