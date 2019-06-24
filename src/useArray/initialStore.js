import React, {useState} from 'react'
import {assignOne} from "../utils/assign";

let globalVar = {};
export default function initialStore(namespace, initialValue){
    if(initialValue !== undefined){
        globalVar[namespace] = initialValue;
    }
    const [arrays, setArrays] = useState(globalVar);
    
    function setArray(values = []){
        let temp = assignOne(arrays, namespace, values);
        setArrays(temp);
        return temp;
    }
    
    function pushArray(val){
        let temp = [...arrays[namespace]];
        temp.push(val);
        let temp2 = assignOne(arrays, namespace, temp);
        setArrays(temp2);
        return temp;
    }
    
    function unshiftArray(val){
        let temp = [...arrays[namespace]];
        temp.unshift(val);
        let temp2 = assignOne(arrays, namespace, temp);
        setArrays(temp2);
        return temp;
    }
    
    function spliceArray(index, length, ...values){
        let temp = [...arrays[namespace]];
        temp.splice(index, length, ...values);
        let temp2 = assignOne(arrays, namespace, temp);
        setArrays(temp2);
        return temp;
    }
    
    function getArray(){
        return arrays[namespace];
    }
    
    return {
        array: getArray(),
        setArray,
        pushArray,
        unshiftArray,
        spliceArray,
    };
}
