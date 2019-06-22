import React, {useState} from 'react'
import {assignOne} from "../utils/assign";

let numbers, setNumbers;
export default function initialStore(namespace, initialValue){
    if(initialValue !== undefined){
        [numbers, setNumbers] = useState(() => ({[namespace]: initialValue}));
    }
    
    function setNumber(val){
        let temp = assignOne(numbers, namespace, val);
        setNumbers(temp);
    }
    
    function incrementNumber(inc){
        let temp = assignOne(numbers, namespace, numbers[namespace] + inc);
        setNumbers(temp);
    }
    
    function decrementNumber(inc){
        let temp = assignOne(numbers, namespace, numbers[namespace] - inc);
        setNumbers(temp);
    }
    
    function getNumber(){
        return numbers[namespace];
    }
    
    return {
        number: getNumber(),
        setNumber,
        incrementNumber,
        decrementNumber,
    };
}
