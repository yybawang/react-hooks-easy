import React from 'react'
import {namespaceParse} from "../utils/namespaceParse";
import {checkArray} from "../utils/checkType";
import store, {createStore} from 'iostore'

let initialValues = {};
export default function initialStore(initialNamespace, initialValue){
    initialNamespace = namespaceParse(initialNamespace);
    if(initialValue !== undefined){
        checkArray(initialValue);
        initialValues[initialNamespace] || (initialValues[initialNamespace] = [...initialValue]);
        
        createStore({
            namespace: initialNamespace,
            value: initialValue,
            add(key, val){
                this.value[key] = val;
            },
            reset(){
                this.value = [...initialValues[initialNamespace]];
            },
            reInitial(value){
                initialValues[initialNamespace] = [...value];
                this.value = value
            },
            del(key){
                delete this.value[key];
            },
            push(val){
                this.value.push(val);
            },
            unshift(val){
                this.value.unshift(val);
            },
            splice(index, length, ...value){
                this.value.splice(index, length, ...value);
            },
        });
    }
    
    return store[initialNamespace];
}
