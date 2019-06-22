import React, {useState} from 'react'
import {assignOne} from "../utils/assign";

let arrays, setArrays;
export default function initialStore(namespace, initialValue){
    if(initialValue !== undefined){
        [arrays, setArrays] = useState(() => ({[namespace]: initialValue}));
    }
    
    function setArray(values = []){
        let temp = assignOne(arrays, namespace, values);
        setArrays(temp);
    }
    
    function pushArray(val){
        let temp = [...arrays[namespace]];
        temp.push(val);
        let temp2 = assignOne(arrays, namespace, temp);
        setArrays(temp2);
    }
    
    function unshiftArray(val){
        let temp = [...arrays[namespace]];
        temp.unshift(val);
        let temp2 = assignOne(arrays, namespace, temp);
        setArrays(temp2);
    }
    
    function spliceArray(index, length, ...values){
        let temp = [...arrays[namespace]];
        temp.splice(index, length, ...values);
        let temp2 = assignOne(arrays, namespace, temp);
        setArrays(temp2);
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
