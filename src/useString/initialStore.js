import React, {useState} from 'react'
import {assignOne} from "../utils/assign";

let strings, setStrings;
export default function initialStore(namespace, initialValue){
    if(initialValue !== undefined){
        [strings, setStrings] = useState(() => ({[namespace]: initialValue}));
    }
    
    function setString(val){
        let temp = assignOne(strings, namespace, val);
        setStrings(temp);
    }
    
    function appendString(val){
        let temp = assignOne(strings, namespace, strings[namespace]+val);
        setStrings(temp);
    }
    
    function prependString(val){
        let temp = assignOne(strings, namespace, val+strings[namespace]);
        setStrings(temp);
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
