import React, {useState} from 'react'
import {assignOne} from "../utils/assign";

let booleans, setBooleans;
export default function initialStore(namespace, initialValue){
    if(initialValue !== undefined){
        [booleans, setBooleans] = useState(() => ({[namespace]: initialValue}));
    }
    
    function setBoolean(val){
        let temp = assignOne(booleans, namespace, val);
        setBooleans(temp);
    }
    
    function toggleBoolean(){
        let temp = assignOne(booleans, namespace, !booleans[namespace]);
        setBooleans(temp);
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
