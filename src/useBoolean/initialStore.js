import React, {useState} from 'react'
import {assignOne} from "../utils/assign";

let globalVar = {};
export default function initialStore(namespace, initialValue){
    if(initialValue !== undefined){
        globalVar[namespace] = initialValue;
    }
    const [booleans, setBooleans] = useState(globalVar);
    
    function setBoolean(val){
        let temp = assignOne(booleans, namespace, val);
        setBooleans(temp);
        return val;
    }
    
    function toggleBoolean(){
        let temp = assignOne(booleans, namespace, !booleans[namespace]);
        setBooleans(temp);
        return !booleans[namespace];
    }
    
    function getBoolean(){
        return booleans[namespace];
    }
    
    return {
        boolean: getBoolean(),
        setBoolean,
        toggleBoolean,
    };
}
