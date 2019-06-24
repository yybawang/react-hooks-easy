import React, {useState} from 'react'
import {assignOne} from "../utils/assign";

let globalVar = {};
export default function initialStore(namespace, initialValue){
    if(initialValue !== undefined){
        globalVar[namespace] = initialValue;
    }
    const [numbers, setNumbers] = useState(globalVar);
    
    function setNumber(val){
        let temp = assignOne(numbers, namespace, val);
        setNumbers(temp);
        return val;
    }
    
    function incrementNumber(inc){
        let temp = assignOne(numbers, namespace, numbers[namespace] + inc);
        setNumbers(temp);
        return numbers[namespace] + inc;
    }
    
    function decrementNumber(inc){
        let temp = assignOne(numbers, namespace, numbers[namespace] - inc);
        setNumbers(temp);
        return numbers[namespace] - inc;
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
