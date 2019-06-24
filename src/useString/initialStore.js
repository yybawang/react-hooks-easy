import React, {useState} from 'react'
import {assignOne} from "../utils/assign";

let globalVar = {};
export default function initialStore(namespace, initialValue){
    if(initialValue !== undefined){
        globalVar[namespace] = initialValue;
    }
    const [strings, setStrings] = useState(globalVar);
    
    function setString(val){
        let temp = assignOne(strings, namespace, val);
        setStrings(temp);
        return val;
    }
    
    function appendString(val){
        let temp = assignOne(strings, namespace, strings[namespace]+val);
        setStrings(temp);
        return strings[namespace]+val;
    }
    
    function prependString(val){
        let temp = assignOne(strings, namespace, val+strings[namespace]);
        setStrings(temp);
        return val+strings[namespace];
    }
    
    function getString(){
        return strings[namespace];
    }
    
    return {
        string: getString(),
        setString,
        appendString,
        prependString,
    };
}
