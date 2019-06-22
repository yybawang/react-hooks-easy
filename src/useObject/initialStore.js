import React, {useState} from 'react'
import {assign, assignOne} from "../utils/assign";

let objects, setObjects;
export default function initialStore(namespace, initialValue){
    if(initialValue !== undefined){
        [objects, setObjects] = useState(() => ({[namespace]: initialValue}));
    }
    
    function addObject(key, val){
        let temp = assignOne(objects[namespace], key, val);
        let temp2 = assignOne(objects, namespace, temp);
        setObjects(temp2);
    }
    
    function setObject(values = {}){
        let temp = assignOne(objects, namespace, values);
        setObjects(temp);
    }
    
    function delObject(key){
        let temp = {...objects[namespace]};
        delete temp[key];
        let temp2 = assignOne(objects, namespace, temp);
        setObjects(temp2);
    }
    
    function spliceObject(index, length, values){
        let temp = {...objects[namespace]}, temp_keys = Object.keys(temp), temp_values = Object.values(temp);
        temp_keys.splice(index, length, ...Object.keys(values));
        temp_values.splice(index, length, ...Object.values(values));
        
        let temp2 = {};
        for(let i in temp_keys){
            temp2[temp_keys[i]] = temp_values[i];
        }
        
        let temp3 = assignOne(objects, namespace, temp2);
        setObjects(temp3);
    }
    
    function getObject(){
        return objects[namespace];
    }
    
    return {
        object: getObject(),
        setObject,
        addObject,
        delObject,
        spliceObject,
    };
}
