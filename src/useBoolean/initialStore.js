import React, {useState} from 'react'
import {assignOne} from "../utils/assign";

let booleans, setBooleans;
export default (namespace) => {
    // if(initialValue !== undefined){
    //     if(typeof initialValue !== 'boolean'){
    //         throw new Error('The initial value is not a boolean type');
    //     }
        [booleans, setBooleans] = useState({});
    // }
    
    
    const set = (val) => {
        let temp = assignOne(booleans, namespace, val);
        setBooleans(temp);
    };
    
    const toggle = () => {
        let temp = assignOne(booleans, namespace, !booleans[namespace]);
        setBooleans(temp);
    };
    
    return {
        value: booleans[namespace],
        set,
        toggle,
    };
}